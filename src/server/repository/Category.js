import { Category } from "../model";

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

export const CategoryRepository = {
  async getTree(opts = {}) {
    const options = {
      active: true,
      ...opts
    };

    const query = `WITH RECURSIVE categories_tree AS (
      SELECT id, name, seo_url, is_active, parent_id
      FROM categories
      WHERE parent_id is null
      
      UNION
      
      SELECT c.id, c.name, c.seo_url, c.is_active, c.parent_id
      FROM categories c
      INNER JOIN categories_tree ct ON ct.id = c.parent_id${
        options.active ? " and c.is_active = true " : ""
      }
     ) SELECT * from categories_tree;`;

    const result = await Category.raw(query);

    return buildTree(result.rows)(null);
  }
};
