import compose from "lodash/fp/compose";
import { fallback, falseToUndefined } from "../utils";
import { withValueOnTruthy } from "../decorators";

export function falidator(validatorFn, fallbackValue) {
  return compose(
    fallback(fallbackValue),
    falseToUndefined,
    withValueOnTruthy(val => val === true, validatorFn)
  );
}
