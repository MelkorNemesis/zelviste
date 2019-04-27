import { get } from "./helpers";

export function user() {
  return get("/user");
}
