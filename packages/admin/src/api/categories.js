import { get } from "./helpers";

export function getCategories() {
  return get("/categories");
}
