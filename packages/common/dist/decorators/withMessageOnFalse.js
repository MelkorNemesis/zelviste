"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withMessageOnFalse = withMessageOnFalse;
function withMessageOnFalse(message) {
  return function withMessageOnFalseInner(val) {
    return val === false ? message : val;
  };
}