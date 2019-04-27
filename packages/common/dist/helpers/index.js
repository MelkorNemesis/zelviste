"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.falseToUndefined = falseToUndefined;
exports.trueToUndefined = trueToUndefined;
exports.noopLog = noopLog;
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

function noopLog() {
  var _console;

  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  (_console = console).log.apply(_console, ["noopLog: "].concat(args));
}