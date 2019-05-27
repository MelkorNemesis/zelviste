import { get } from "./helpers";

export function getVats() {
  return get("/vats");
}
