import crypto from "crypto";

export function getRandomString(length) {
  return crypto
    .randomBytes(Math.ceil(length / 2))
    .toString("hex") /** convert to hexadecimal format */
    .slice(0, length); /** return required number of characters */
}

export function sha512({ password, salt }) {
  const hash = crypto.createHmac(
    "sha512",
    salt
  ); /** Hashing algorithm sha512 */
  hash.update(password);
  return hash.digest("hex");
}

export function round(num) {
  return Math.ceil(num);
}
