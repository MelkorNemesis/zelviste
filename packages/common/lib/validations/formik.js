import { compose } from "rambda";

import { withMessageOnFalse } from "../decorators";
import { trueToUndefined } from "../helpers";
import * as v from "./validations";

export function validator(validations) {
  return function validate(val) {
    if (!Array.isArray(validations)) {
      validations = [validations];
    }

    for (let i = 0; i <= validations.length - 1; i++) {
      const err = validations[i](val);
      if (err) {
        return err;
      }
    }

    return undefined;
  };
}

const formikValidate = function(validateFn, message) {
  return compose(
    trueToUndefined,
    withMessageOnFalse(message),
    validateFn
  );
};

export const email = formikValidate(
  v.email,
  "Email musít být ve formátu x@y.z."
);
export const required = formikValidate(v.required, "Povinné pole.");
export const minLength = formikValidate(v.minLength, "Pole je příliš krátké.");
export const number = formikValidate(v.number, "Pole musí být číslo.");
export const integer = formikValidate(v.integer, "Pole musí být celé číslo.");
