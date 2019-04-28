"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductPrice = undefined;

var _templateObject = _taggedTemplateLiteral([""], [""]),
    _templateObject2 = _taggedTemplateLiteral(["\n  display: inline-block;\n  margin-left: ", ";\n\n  text-decoration: line-through;\n  color: ", ";\n"], ["\n  display: inline-block;\n  margin-left: ", ";\n\n  text-decoration: line-through;\n  color: ", ";\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledProductPrice = _styledComponents2.default.span(_templateObject);
var PriceBefore = _styledComponents2.default.span(_templateObject2, function (_ref) {
  var theme = _ref.theme;
  return theme.spacing_xs;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.c_text_faded;
});

var ProductPrice = function ProductPrice(_ref3) {
  var price = _ref3.price,
      priceBefore = _ref3.priceBefore,
      rest = _objectWithoutProperties(_ref3, ["price", "priceBefore"]);

  return _react2.default.createElement(
    StyledProductPrice,
    rest,
    _react2.default.createElement(
      "strong",
      null,
      price,
      " K\u010D"
    ),
    priceBefore && _react2.default.createElement(
      PriceBefore,
      null,
      "(",
      priceBefore,
      " K\u010D)"
    )
  );
};
exports.ProductPrice = ProductPrice;