export function floor(num, precision = 2) {
  const p = Math.pow(10, precision);
  return Math.floor(num * p) / p;
}
