export function withMessageOnFalse(message) {
  return function withMessageOnFalseInner(val) {
    return val === false ? message : val;
  };
}
