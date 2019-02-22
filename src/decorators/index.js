export function withValueOnTruthy(predicate, fn) {
  return function withValueOnTruthyInner(arg) {
    const val = fn(arg);
    if (predicate(val)) {
      return arg;
    }
    return val;
  };
}
