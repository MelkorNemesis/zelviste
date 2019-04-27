"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormError = undefined;

var _templateObject = _taggedTemplateLiteral(["\n  display: block;\n\n  color: ", ";\n  font-weight: 600;\n"], ["\n  display: block;\n\n  color: ", ";\n  font-weight: 600;\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FormError = exports.FormError = _styledComponents2.default.label(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.c_form_error;
});