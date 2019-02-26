import { raw } from "objection";

import { Category, Product } from "../model";

function buildTree(categories = []) {
  return function getChildren(parentId = null) {
    return categories
      .filter(c => c.parent_id === parentId)
      .map(c => {
        const { parent_id, ...rest } = c;
        return { ...rest, children: getChildren(c.id) };
      });
  };
}

export const ORDER_COL_MAP = {
  price: raw("(price_without_vat - discount)"),
  name: "name"
};

export const CategoryRepository = {
  getSubcategories(opts = {}) {
    const options = {
      active: true,
      parentId: null,
      ...opts
    };

    const query = `WITH RECURSIVE categories_tree AS (
      SELECT id, name, seo_url, is_active, parent_id
      FROM categories
      WHERE ${options.parentId ? "parent_id = :parent_id" : "parent_id is null"}
      
      UNION
      
      SELECT c.id, c.name, c.seo_url, c.is_active, c.parent_id
      FROM categories c
      INNER JOIN categories_tree ct ON ct.id = c.parent_id${
        options.active ? " and c.is_active = true " : ""
      }
     ) SELECT * from categories_tree;`;

    const bindings = {};
    if (options.parentId) {
      bindings.parent_id = options.parentId;
    }

    return Category.raw(query, bindings);
  },

  async getTree(opts = {}) {
    const options = {
      active: true,
      ...opts
    };

    const categories = await CategoryRepository.getSubcategories(options);

    return buildTree(categories.rows)(null);
  },

  async getProducts(id, { sort, limit, offset } = {}) {
    const subcategories = await this.getSubcategories({
      parentId: id,
      active: true
    });

    const subcategoriesIds = subcategories.rows.map(
      subcategory => subcategory.id
    );

    const productsQuery = Product.query()
      .where("is_active", true)
      .whereIn("id_category", [id, ...subcategoriesIds]);

    // get total products count regardless offset and limit clause
    let totalProductResult = await productsQuery
      .clone()
      .clearSelect()
      .select(raw("COUNT(*) OVER()::integer AS total"))
      .limit(1)
      .first();

    if (sort) {
      const [column, direction] = sort.split(".");
      productsQuery.orderBy(ORDER_COL_MAP[column], direction);
    }

    if (limit) {
      productsQuery.limit(limit);
    }

    if (offset) {
      productsQuery.offset(offset);
    }

    // get the products array
    const products = await productsQuery;

    return {
      total: (totalProductResult && totalProductResult.total) || 0,
      products
    };
  },

  getActiveBySeoUrl(seoUrl) {
    return Category.query()
      .where("is_active", true)
      .where("seo_url", seoUrl)
      .limit(1)
      .first();
  },

  getActiveById(id) {
    return Category.query()
      .where("is_active", true)
      .where("id", id)
      .limit(1)
      .first();
  }
};
