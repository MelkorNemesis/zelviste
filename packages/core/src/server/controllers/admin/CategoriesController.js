import boom from "boom";

import { Category } from "../../model";
import { CategoryRepository } from "../../repository";
import { format } from "../helpers";

export const CategoriesController = {
  async getAll(req) {
    const categories = await CategoryRepository.getTree({ active: null });
    return format.ok(categories);
  }
};
