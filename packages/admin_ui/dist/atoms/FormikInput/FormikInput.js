"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormikInput = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(["\n  margin-top: ", ";\n  width: 100%;\n"], ["\n  margin-top: ", ";\n  width: 100%;\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ = require("..");

var _hooks = require("../../hooks");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledFormikInput = _styledComponents2.default.div(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.control_margin_top;
});

var FormikInput = function FormikInput(_ref2) {
  var field = _ref2.field,
      _ref2$form = _ref2.form,
      touched = _ref2$form.touched,
      errors = _ref2$form.errors,
      props = _objectWithoutProperties(_ref2, ["field", "form"]);

  var id = (0, _hooks.useNextId)();
  var label = props.label;

  var hasError = touched[field.name] && errors[field.name];

  return _react2.default.createElement(
    StyledFormikInput,
    null,
    label && _react2.default.createElement(
      _.Label,
      { htmlFor: id, hasError: hasError },
      label
    ),
    _react2.default.createElement(_.Input, _extends({}, field, { id: id }, props, { hasError: hasError })),
    hasError && _react2.default.createElement(
      _.InputError,
      { htmlFor: id },
      errors[field.name]
    )
  );
};
exports.FormikInput = FormikInput;