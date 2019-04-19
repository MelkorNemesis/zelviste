"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.falseToUndefined = falseToUndefined;
exports.trueToUndefined = trueToUndefined;
function falseToUndefined(value) {
  if (value !== false) {
    return value;
  }
  return undefined;
}

function trueToUndefined(value) {
  if (value === true) {
    return undefined;
  }
  return value;
}