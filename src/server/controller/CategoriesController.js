import { CategoryRepository } from "../repository";
import boom from "boom";

export const CategoriesController = {
  async getAll(req) {
    const { seo_url } = req.query;

    // if seo_url in query, fetch one
    if (seo_url) {
      const category = await CategoryRepository.getActiveBySeoUrl(seo_url);

      if (!category) {
        throw boom.notFound();
      }

      return category;
    } else {
      // fetch categories tree
      return CategoryRepository.getTree();
    }
  },

  getProducts(req) {
    return req.category.getProducts(req.query);
  }
};
