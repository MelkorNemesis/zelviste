import { Model, raw } from "objection";
import { Product } from ".";

const ORDER_COL_MAP = {
  price: raw("(price_without_vat - discount)"),
  name: "name"
};

export class Category extends Model {
  static get tableName() {
    return "categories";
  }

  static get relationMappings() {
    return {
      products: {
        relation: Model.HasManyRelation,
        modelClass: Product,
        join: {
          from: "categories.id",
          to: "products.id_category"
        }
      }
    };
  }

  async getProducts({ sort, limit, offset } = {}) {
    const productsQuery = this.$relatedQuery("products")
      .select(["*", raw("(COUNT(*) OVER())::integer AS total")])
      .where("is_active", true);

    // const total = await productsQuery;

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

    return productsQuery;
  }
}
