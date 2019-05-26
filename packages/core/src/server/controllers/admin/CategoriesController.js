import { CategoryRepository } from "../../repository";
import { format } from "../helpers";

export const CategoriesController = {
  async getAll() {
    const categories = await CategoryRepository.getTree({ active: null });
    return format.ok(categories);
  }
};
