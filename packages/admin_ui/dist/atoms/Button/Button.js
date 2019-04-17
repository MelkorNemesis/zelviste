"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = undefined;

var _templateObject = _taggedTemplateLiteral(["\n  display: block;\n  width: 100%;\n  height: ", ";\n  margin-top: ", ";\n\n  &[type=\"submit\"] {\n    margin-top: ", ";\n  }\n\n  font-size: 14px;\n  font-weight: 600;\n  color: #fff;\n\n  cursor: pointer;\n  border: none;\n  border-radius: ", ";\n  background: #2980b9;\n\n  &:hover {\n    background: #2969a2;\n  }\n"], ["\n  display: block;\n  width: 100%;\n  height: ", ";\n  margin-top: ", ";\n\n  &[type=\"submit\"] {\n    margin-top: ", ";\n  }\n\n  font-size: 14px;\n  font-weight: 600;\n  color: #fff;\n\n  cursor: pointer;\n  border: none;\n  border-radius: ", ";\n  background: #2980b9;\n\n  &:hover {\n    background: #2969a2;\n  }\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledButton = _styledComponents2.default.button(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.inputHeight;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.controlMarginTop;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.controlSubmitMarginTop;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.borderRadius;
});

var Button = function Button(_ref5) {
  var rest = _objectWithoutProperties(_ref5, []);

  return _react2.default.createElement(StyledButton, rest);
};
exports.Button = Button;