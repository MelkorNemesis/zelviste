import { get } from "./helpers";
import qs from "qs";

export function getCategories() {
  return get("/api/categories");
}

export function getCategoryBySeoUrl(seoUrl) {
  return get(`/api/categories?seo_url=${seoUrl}`);
}

export function getCategoryProducts(id, { sort, limit, offset } = {}) {
  const query = qs.stringify({ sort, limit, offset });
  return get(`/api/categories/${id}/products?${query}`);
}
