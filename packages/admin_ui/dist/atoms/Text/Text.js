"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(["\n  margin: ", " 0 1em;\n  font-size: ", ";\n  text-decoration: ", ";\n"], ["\n  margin: ", " 0 1em;\n  font-size: ", ";\n  text-decoration: ", ";\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var getFontSize = function getFontSize(_ref) {
  var h1 = _ref.h1,
      h2 = _ref.h2,
      smaller = _ref.smaller;

  if (h1) {
    return "28px";
  } else if (h2) {
    return "24px";
  } else if (smaller) {
    return "12px";
  }
};

var getTextDecoration = function getTextDecoration(_ref2) {
  var strike = _ref2.strike;

  if (strike) {
    return "line-through";
  } else {
    return "none";
  }
};

var StyledText = _styledComponents2.default.span(_templateObject, function (_ref3) {
  var first = _ref3.first;
  return first ? 0 : "1em";
}, getFontSize, getTextDecoration);

var Text = function Text(_ref4) {
  var children = _ref4.children,
      rest = _objectWithoutProperties(_ref4, ["children"]);

  return _react2.default.createElement(
    StyledText,
    rest,
    children
  );
};

exports.Text = Text;
Text.Paragraph = function (_ref5) {
  var children = _ref5.children,
      rest = _objectWithoutProperties(_ref5, ["children"]);

  return _react2.default.createElement(
    StyledText,
    _extends({ as: "p" }, rest),
    children
  );
};

Text.Header = function (_ref6) {
  var children = _ref6.children,
      rest = _objectWithoutProperties(_ref6, ["children"]);

  var HeaderTag = void 0;
  var h1 = rest.h1,
      h2 = rest.h2,
      h3 = rest.h3;


  if (h1) {
    HeaderTag = "h1";
  } else if (h2) {
    HeaderTag = "h2";
  } else if (h3) {
    HeaderTag = "h3";
  }

  return _react2.default.createElement(
    StyledText,
    _extends({ as: HeaderTag }, rest),
    children
  );
};