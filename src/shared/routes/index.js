import { Homepage, Product, NotFound } from "../../components/pages";
import { Category } from "../../containers";
import { Routes } from "../../consts";

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