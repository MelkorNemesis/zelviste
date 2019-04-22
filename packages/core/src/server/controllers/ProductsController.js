import boom from "boom";

import { Product } from "../model";
import { format } from "./helpers";

export const ProductsController = {
  async getBySeoUrl(req) {
    const { seo_url } = req.query;

    const product = await Product.query()
      .where("is_active", true)
      .where("seo_url", seo_url)
      .eager("manufacturer")
      .limit(1)
      .first();

    if (!product) {
      throw boom.notFound();
    }

    const category = await product
      .$relatedQuery("category")
      .where("is_active", true);

    const hasAllParentsActive = await category.hasAllParentsActive();

    if (!category || !hasAllParentsActive) {
      throw boom.notFound();
    }

    return format.ok(product);
  },

  async getAll(req) {
    const { seo_url } = req.query;

    if (seo_url) {
      return await ProductsController.getBySeoUrl(req);
    }

    // not supporting fetching all products
    // at the moment
    return format.ok([]);
  }
};
