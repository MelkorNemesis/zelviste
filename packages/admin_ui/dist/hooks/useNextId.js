"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useNextId = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require("react");

var _common = require("@eshop/common");

var useNextId = exports.useNextId = function useNextId(prefix) {
  var _useState = (0, _react.useState)((0, _common.nextId)(prefix)),
      _useState2 = _slicedToArray(_useState, 1),
      id = _useState2[0];

  return id;
};