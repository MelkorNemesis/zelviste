"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Label = undefined;

var _templateObject = _taggedTemplateLiteral(["\n  display: block;\n  font-weight: 600;\n  margin-bottom: 3px;\n\n  color: ", ";\n"], ["\n  display: block;\n  font-weight: 600;\n  margin-bottom: 3px;\n\n  color: ", ";\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Label = exports.Label = _styledComponents2.default.label(_templateObject, function (_ref) {
  var hasError = _ref.hasError,
      input_error_color = _ref.theme.input_error_color;
  return hasError ? input_error_color : "#636e72";
});