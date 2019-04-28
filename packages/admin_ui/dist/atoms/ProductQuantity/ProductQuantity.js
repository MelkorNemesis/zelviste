"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductQuantity = undefined;

var _templateObject = _taggedTemplateLiteral(["\n  color: ", ";\n"], ["\n  color: ", ";\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledProductQuantity = _styledComponents2.default.span(_templateObject, function (_ref) {
  var quantity = _ref.quantity,
      theme = _ref.theme;
  return quantity > 3 ? theme.c_green_2 : theme.c_red_1;
});

var StyledUnit = _styledComponents2.default.span(_templateObject, function (_ref2) {
  var theme = _ref2.theme;
  return theme.c_text_alt;
});

var ProductQuantity = exports.ProductQuantity = function ProductQuantity(_ref3) {
  var quantity = _ref3.quantity;
  return _react2.default.createElement(
    StyledProductQuantity,
    { quantity: quantity },
    quantity,
    " ",
    _react2.default.createElement(
      StyledUnit,
      null,
      "ks"
    )
  );
};