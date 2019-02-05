import { CategoryRepository } from "../repository";

export const CategoriesController = {
  async getAll() {
    return CategoryRepository.getTree();
  }
};
