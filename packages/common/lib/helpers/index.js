export function falseToUndefined(value) {
  if (value !== false) {
    return value;
  }
  return undefined;
}

export function trueToUndefined(value) {
  if (value === true) {
    return undefined;
  }
  return value;
}
