"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GlobalStyles = undefined;

var _templateObject = _taggedTemplateLiteral(["\n  body {\n    font-family: ", ";\n    font-size: ", ";\n    color: ", "\n  }\n  \n  html, body, #root {\n    height: 100%;\n  }\n  \n  * {\n    box-sizing: border-box;\n  }\n"], ["\n  body {\n    font-family: ", ";\n    font-size: ", ";\n    color: ", "\n  }\n  \n  html, body, #root {\n    height: 100%;\n  }\n  \n  * {\n    box-sizing: border-box;\n  }\n"]);

var _styledComponents = require("styled-components");

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GlobalStyles = exports.GlobalStyles = (0, _styledComponents.createGlobalStyle)(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.font_family;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.font_size;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.color;
});