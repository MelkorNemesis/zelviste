const _isTouchDevice = !!(
  typeof window !== "undefined" &&
  ("ontouchstart" in window ||
    (window.DocumentTouch && document instanceof window.DocumentTouch))
);

export function isTouchDevice() {
  return _isTouchDevice;
}

const _isBrowser = typeof window !== "undefined";

export function isBrowser() {
  return _isBrowser;
}
