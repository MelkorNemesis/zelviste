import { get } from "./helpers";

export function getProducts() {
  return get("/products");
}

export function getProductById({ id }) {
  return get(`/products/${id}`);
}
