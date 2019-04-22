export function withValueOnTruthy(fn, predicate = x => x === true) {
  return function withValueOnTruthyInner(arg) {
    const val = fn(arg);
    if (predicate(val)) {
      return arg;
    }
    return val;
  };
}
