"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Err = undefined;

var _templateObject = _taggedTemplateLiteral(["\n  color: ", ";\n  font-weight: 700;\n"], ["\n  color: ", ";\n  font-weight: 700;\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledError = _styledComponents2.default.div(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.c_red_1;
});

var Err = function Err(_ref2) {
  var children = _ref2.children,
      rest = _objectWithoutProperties(_ref2, ["children"]);

  return _react2.default.createElement(
    StyledError,
    rest,
    children
  );
};
exports.Err = Err;