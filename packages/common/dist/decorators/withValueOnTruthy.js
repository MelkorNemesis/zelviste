"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withValueOnTruthy = withValueOnTruthy;
function withValueOnTruthy(fn) {
  var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (x) {
    return x === true;
  };

  return function withValueOnTruthyInner(arg) {
    var val = fn(arg);
    if (predicate(val)) {
      return arg;
    }
    return val;
  };
}