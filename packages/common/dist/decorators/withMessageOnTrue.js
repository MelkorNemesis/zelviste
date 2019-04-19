"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withMessageOnTrue = withMessageOnTrue;
function withMessageOnTrue(message) {
  return function withMessageOnTrueInner(val) {
    return val === true ? message : val;
  };
}