"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = undefined;

var _templateObject = _taggedTemplateLiteral(["\n  height: ", ";\n  width: 100%;\n  padding: 0 10px;\n\n  font-size: 16px;\n  font-weight: 500;\n\n  color: ", ";\n\n  border: 2px solid\n    ", ";\n  border-radius: ", ";\n  background: ", ";\n  \n  box-shadow: ", "\n\n  outline: none;\n\n  &:focus {\n    border-color: ", ";\n  }\n"], ["\n  height: ", ";\n  width: 100%;\n  padding: 0 10px;\n\n  font-size: 16px;\n  font-weight: 500;\n\n  color: ", ";\n\n  border: 2px solid\n    ", ";\n  border-radius: ", ";\n  background: ", ";\n  \n  box-shadow: ", "\n\n  outline: none;\n\n  &:focus {\n    border-color: ", ";\n  }\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledInput = _styledComponents2.default.input(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.input_height;
}, function (_ref2) {
  var hasError = _ref2.hasError,
      input_error_color_text = _ref2.theme.input_error_color_text;
  return hasError ? input_error_color_text : "black";
}, function (_ref3) {
  var hasError = _ref3.hasError,
      input_error_color = _ref3.theme.input_error_color;
  return hasError ? input_error_color : "#eee";
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.borderRadius;
}, function (_ref5) {
  var hasError = _ref5.hasError,
      input_error_bg_color = _ref5.theme.input_error_bg_color;
  return hasError ? input_error_bg_color : "#fff";
}, function (_ref6) {
  var hasError = _ref6.hasError,
      input_error_border_color = _ref6.theme.input_error_border_color;
  return hasError ? "3px 3px 0 " + input_error_border_color : "none";
}, function (_ref7) {
  var hasError = _ref7.hasError,
      _ref7$theme = _ref7.theme,
      input_error_color = _ref7$theme.input_error_color,
      input_accent_color = _ref7$theme.input_accent_color;
  return hasError ? input_error_color : input_accent_color;
});

var Input = function Input(_ref8) {
  var rest = _objectWithoutProperties(_ref8, []);

  return _react2.default.createElement(StyledInput, rest);
};
exports.Input = Input;