import { string } from "yup";

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
