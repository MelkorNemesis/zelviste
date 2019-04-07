"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = undefined;

var _templateObject = _taggedTemplateLiteral(["\n  color: red;\n"], ["\n  color: red;\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledInput = _styledComponents2.default.input(_templateObject);

var Input = function Input(_ref) {
  var rest = _objectWithoutProperties(_ref, []);

  return _react2.default.createElement(StyledInput, rest);
};
exports.Input = Input;