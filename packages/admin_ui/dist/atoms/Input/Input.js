"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = undefined;

var _templateObject = _taggedTemplateLiteral(["\n  height: ", ";\n  width: 100%;\n  padding: 0 10px;\n\n  font-size: 16px;\n  font-weight: 500;\n  color: black;\n\n  border: 2px solid #eee;\n  border-radius: ", ";\n\n  outline: none;\n\n  &:focus {\n    border-color: ", ";\n  }\n"], ["\n  height: ", ";\n  width: 100%;\n  padding: 0 10px;\n\n  font-size: 16px;\n  font-weight: 500;\n  color: black;\n\n  border: 2px solid #eee;\n  border-radius: ", ";\n\n  outline: none;\n\n  &:focus {\n    border-color: ", ";\n  }\n"]);

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
  var theme = _ref2.theme;
  return theme.borderRadius;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.inputAccentColor;
});

var Input = function Input(_ref4) {
  var rest = _objectWithoutProperties(_ref4, []);

  return _react2.default.createElement(StyledInput, rest);
};
exports.Input = Input;