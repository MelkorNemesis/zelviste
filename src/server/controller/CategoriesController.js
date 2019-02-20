import boom from "boom";

import { CategoryRepository } from "../repository";
import { format } from "./helpers";

export const CategoriesController = {
  async getAll(req) {
    const { seo_url } = req.query;

    // if seo_url in query, fetch one
    if (seo_url) {
      const category = await CategoryRepository.getActiveBySeoUrl(seo_url);

      if (!category) {
        throw boom.notFound();
      }

      return format.ok(category);
    } else {
      // fetch categories tree
      const tree = await CategoryRepository.getTree();
      return format.ok(tree);
    }
  },

  async getProducts(req) {
    const { products, total } = await req.category.getProducts(req.query);
    return format.ok(products, {
      total
    });
  }
};
