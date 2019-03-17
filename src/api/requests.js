import { get } from "./helpers";
import qs from "qs";

export function getCategories() {
  return get("/api/categories");
}

export function getCategoryBySeoUrl(seoUrl) {
  const query = qs.stringify({
    seo_url: seoUrl
  });
  return get(`/api/categories?${query}`);
}

export function getCategoryProducts(id, { sort, limit, offset } = {}) {
  const query = qs.stringify({ sort, limit, offset });
  return get(`/api/categories/${id}/products?${query}`);
}

export function getProductBySeoUrl(seoUrl) {
  const query = qs.stringify({
    seo_url: seoUrl
  });
  return get(`/api/products?${query}`);
}
