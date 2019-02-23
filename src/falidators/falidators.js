import { falidator } from "./helpers";
import { isValidPage, isValidSorting } from "../validations";

export function falidateOrder(order, fallback) {
  return falidator(isValidSorting, fallback)(order);
}

export function falidatePage(page, fallback) {
  return falidator(isValidPage, fallback)(page);
}
