import { get } from "./helpers";

export function getManufacturers() {
  return get("/manufacturers");
}
