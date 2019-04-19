"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = undefined;

var _templateObject = _taggedTemplateLiteral(["\n  height: ", ";\n  width: 100%;\n  padding: 0 10px;\n\n  font-size: 16px;\n  font-weight: 500;\n\n  color: ", ";\n\n  border: 2px solid\n    ", ";\n  border-radius: ", ";\n  \n  box-shadow: ", "\n\n  outline: none;\n\n  &:focus {\n    border-color: ", ";\n  }\n"], ["\n  height: ", ";\n  width: 100%;\n  padding: 0 10px;\n\n  font-size: 16px;\n  font-weight: 500;\n\n  color: ", ";\n\n  border: 2px solid\n    ", ";\n  border-radius: ", ";\n  \n  box-shadow: ", "\n\n  outline: none;\n\n  &:focus {\n    border-color: ", ";\n  }\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledInput = _styledComponents2.default.input(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.inputHeight;
}, function (_ref2) {
  var hasError = _ref2.hasError,
      inputErrorColorText = _ref2.theme.inputErrorColorText;
  return hasError ? inputErrorColorText : "black";
}, function (_ref3) {
  var hasError = _ref3.hasError,
      inputErrorColor = _ref3.theme.inputErrorColor;
  return hasError ? inputErrorColor : "#eee";
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.borderRadius;
}, function (_ref5) {
  var hasError = _ref5.hasError,
      inputErrorBorderColor = _ref5.theme.inputErrorBorderColor;
  return hasError ? "0 0 12px " + inputErrorBorderColor : "none";
}, function (_ref6) {
  var hasError = _ref6.hasError,
      _ref6$theme = _ref6.theme,
      inputErrorColor = _ref6$theme.inputErrorColor,
      inputAccentColor = _ref6$theme.inputAccentColor;
  return hasError ? inputErrorColor : inputAccentColor;
});

var Input = function Input(_ref7) {
  var rest = _objectWithoutProperties(_ref7, []);

  return _react2.default.createElement(StyledInput, rest);
};
exports.Input = Input;