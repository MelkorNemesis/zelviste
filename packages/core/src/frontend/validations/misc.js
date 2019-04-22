export function isAllowed(allowedValues) {
  return function validate(value) {
    return value && allowedValues.findIndex(v => value === v) !== -1;
  };
}

export function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
