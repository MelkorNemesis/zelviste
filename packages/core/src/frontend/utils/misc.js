export function falseToUndefined(value) {
  if (value !== false) {
    return value;
  }
  return undefined;
}

export function fallback(fallback = undefined) {
  return function withFallback(val) {
    if (val === undefined) {
      return fallback;
    }
    return val;
  };
}

export function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}
