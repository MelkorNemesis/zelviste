import { string, number as _number } from "yup";

export function email(val) {
  const schema = string().email();
  return schema.isValidSync(val);
}

export function required(val) {
  const schema = string().required();
  return schema.isValidSync(val);
}

export function minLength(min) {
  return function validateMinLength(val) {
    const schema = string().min(min);
    return schema.isValidSync(val);
  };
}

export function number(val) {
  const schema = _number();
  return schema.isValidSync(val);
}

export function integer(val) {
  const schema = _number().integer();
  return schema.isValidSync(val);
}
