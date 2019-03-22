import { NotFound } from "../../frontend/components/pages";
import { Category, Homepage, Product } from "../../frontend/containers";
import { Routes } from "../../frontend/consts";

export const routes = [
  {
    path: "/",
    component: Homepage,
    exact: true
  },
  {
    path: Routes.category.pattern,
    component: Category
  },
  {
    path: Routes.product.pattern,
    component: Product
  },
  {
    component: NotFound
  }
];
