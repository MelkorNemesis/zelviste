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

export function noopLog(...args) {
  console.log("noopLog: ", ...args);
}

export function isFunction(obj) {
  return typeof obj === "function";
}
