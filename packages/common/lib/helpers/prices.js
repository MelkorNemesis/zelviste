/**
 * Returns vat amount from given price.
 * Example:
 * { price: 200, vat: 21 } => 34.71
 *
 * @param price
 * @param vat
 * @returns {number}
 */
export function getVatAmount({ price, vat }) {
  return price / ((100 + vat) / vat);
}

/**
 * Returns price without vat.
 * Example:
 * { price: 200, vat: 21 } => 165.289
 *
 * @param price
 * @param vat
 * @returns {number}
 */
export function getPriceWithoutVat({ price, vat }) {
  return price / ((vat + 100) / 100);
}
