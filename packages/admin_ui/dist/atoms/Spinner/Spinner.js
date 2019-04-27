"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Spinner = undefined;

var _templateObject = _taggedTemplateLiteral(["\n  0%    { transform: rotate(0deg); }\n  100%  { transform: rotate(360deg); }\n"], ["\n  0%    { transform: rotate(0deg); }\n  100%  { transform: rotate(360deg); }\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  height: 40px;\n  width: 40px;\n\n  animation: ", " 0.8s infinite linear;\n  border: 4px solid ", ";\n  border-right-color: transparent;\n  border-radius: 50%;\n"], ["\n  height: 40px;\n  width: 40px;\n\n  animation: ", " 0.8s infinite linear;\n  border: 4px solid ", ";\n  border-right-color: transparent;\n  border-radius: 50%;\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: ", ";\n\n  & > span {\n    margin-top: ", ";\n    font-weight: 500;\n  }\n\n  &.fullPage {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n\n    transform: translate(-50%, -50%);\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: ", ";\n\n  & > span {\n    margin-top: ", ";\n    font-weight: 500;\n  }\n\n  &.fullPage {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n\n    transform: translate(-50%, -50%);\n  }\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n  position: fixed;\n\n  display: flex;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n\n  background: rgba(255, 255, 255, 0.4);\n"], ["\n  position: fixed;\n\n  display: flex;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n\n  background: rgba(255, 255, 255, 0.4);\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var rotate = (0, _styledComponents.keyframes)(_templateObject);

var StyledSpinnerCircle = _styledComponents2.default.div(_templateObject2, rotate, function (_ref) {
  var theme = _ref.theme;
  return theme.c_spinner;
});

var StyledSpinner = _styledComponents2.default.div(_templateObject3, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing_m;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.spacing_m;
});

var StyledOverlay = _styledComponents2.default.div(_templateObject4);

// -- Spinner
var Spinner = exports.Spinner = function Spinner(_ref4) {
  var children = _ref4.children,
      _ref4$fullPage = _ref4.fullPage,
      fullPage = _ref4$fullPage === undefined ? false : _ref4$fullPage;

  var Wrapper = fullPage ? StyledOverlay : _react.Fragment;
  return _react2.default.createElement(
    Wrapper,
    null,
    _react2.default.createElement(
      StyledSpinner,
      null,
      _react2.default.createElement(StyledSpinnerCircle, null),
      children && _react2.default.createElement(
        "span",
        null,
        children
      )
    )
  );
};