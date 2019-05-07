import boom from "boom";

import { Product } from "../../model";
import { format } from "../helpers";

export const ProductsController = {
  async getById(req) {
    const { id } = req.params;

    const product = await Product.query()
      .findById(id)
      .eager("[manufacturer, category]")
      .limit(1)
      .first();

    if (!product) {
      throw boom.notFound();
    }

    return format.ok(product);
  },

  async getAll() {
    const products = await Product.query()
      .orderBy("id", "desc")
      .eager("[manufacturer, category]");

    return format.ok(products);
  }
};
