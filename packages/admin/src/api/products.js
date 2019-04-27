import { get } from "./helpers";

export function getProducts() {
  return get("/products");
}
