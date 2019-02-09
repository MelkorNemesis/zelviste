import { CategoryRepository } from "../repository";
import boom from "boom";

export const CategoriesController = {
  async getAll(req) {
    const seoUrl = req.query.seo_url;

    if (seoUrl) {
      const category = await CategoryRepository.getActiveBySeoUrl(seoUrl);

      if (!category) {
        throw boom.notFound();
      }

      return category;
    }

    return CategoryRepository.getTree();
  },

  async getProducts(req) {
    return await req.category
      .$relatedQuery("products")
      .where("is_active", true);
  }
};
