import { Platform } from "../consts";

export function seoTitle(title = null) {
  return `${title ? title + " | " : ""}${Platform.ESHOP_NAME_DOMAIN}`;
}
