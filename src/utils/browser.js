export function isTouchDevice() {
  return !!(
    "ontouchstart" in window ||
    (window.DocumentTouch && document instanceof window.DocumentTouch)
  );
}

const _isBrowser = typeof window !== "undefined";

export function isBrowser() {
  return _isBrowser;
}
