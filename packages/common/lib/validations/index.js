import { string } from "yup";

export function email(val, message) {
  const schema = string().email(message || "Špatně zadaný e-mail");
  return schema.isValidSync(val);
}

export function required(val, message) {
  const schema = string().required(message || "Položka je povinná.");
  return schema.isValidSync(val);
}

export function minLength(min) {
  return function validateMinLength(val, message) {
    const defaultMessage = min => `Položka musí mít alespoň ${min} znaků.`;
    const schema = string().min(min, message || defaultMessage());
    return schema.isValidSync(val);
  };
}
