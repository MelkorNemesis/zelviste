import { isAllowed, isNumeric } from "./index";
import { Category as CategoryConsts } from "../shared/consts";

export function isValidSorting(val) {
  return isAllowed(CategoryConsts.AVAILABLE_SORTING)(val);
}

export function isValidPage(val) {
  return isNumeric(val) && val > 0;
}
