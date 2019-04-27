"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdminThemeProvider = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _GlobalStyles = require("../GlobalStyles/GlobalStyles");

var _theme = require("../theme");

var theme = _interopRequireWildcard(_theme);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AdminThemeProvider = exports.AdminThemeProvider = function AdminThemeProvider(_ref) {
  var children = _ref.children;

  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(
      _styledComponents.ThemeProvider,
      { theme: theme },
      _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(_GlobalStyles.GlobalStyles, null),
        children
      )
    )
  );
};