import { compose } from "rambda";

import { withMessageOnFalse } from "../decorators";
import { trueToUndefined, isFunction } from "../helpers";
import * as v from "./validations";

// -- formik validator
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

// -- formik validate helper
function formikValidate(validateFn, message) {
  if (Array.isArray(validateFn)) {
    return (...args) =>
      formikValidate(
        validateFn[0].apply(null, args),
        isFunction(message) ? message.apply(null, args) : message
      );
  }

  return compose(
    trueToUndefined,
    withMessageOnFalse(message),
    validateFn
  );
}

// -- custom validations
export const email = formikValidate(
  v.email,
  "Email musít být ve formátu x@y.z."
);
export const required = formikValidate(v.required, "Povinné pole.");
export const minLength = formikValidate(
  [v.minLength],
  min => `Pole musí mít alespoň ${min} znaky.`
);
export const number = formikValidate(v.number, "Pole musí být číslo.");
export const integer = formikValidate(v.integer, "Pole musí být celé číslo.");
export const min = formikValidate(
  [v.min],
  min => `Hodnota musí být minimálně ${min}.`
);
export const max = formikValidate(
  [v.max],
  max => `Hodnota musí být maximálně ${max}.`
);
