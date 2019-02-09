import { get } from "./helpers";

export function getCategories() {
  return get("/api/categories");
}

export function getCategoryBySeoUrl(seoUrl) {
  return get(`/api/categories?seo_url=${seoUrl}`);
}

export function getProducts() {}
