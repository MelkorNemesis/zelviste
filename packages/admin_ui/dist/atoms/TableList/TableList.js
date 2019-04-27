"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableList = undefined;

var _templateObject = _taggedTemplateLiteral(["\n  table {\n    width: 100%;\n    border-spacing: 0 ", ";\n    border-collapse: separate;\n    font-weight: 500;\n\n    thead {\n      th {\n        padding: ", ";\n\n        &:first-child {\n          padding-left: ", ";\n        }\n\n        &:last-child {\n          padding-right: ", ";\n        }\n\n        color: ", ";\n        text-align: left;\n        text-transform: uppercase;\n        font-weight: 700;\n        font-size: 12px;\n      }\n    }\n\n    tbody {\n      tr {\n        border-radius: ", ";\n\n        &:hover {\n          td {\n            background: #e9f1f5;\n            border-bottom-color: #d1d9dd;\n          }\n        }\n\n        td {\n          padding: ", ";\n\n          text-align: left;\n\n          border-bottom: 2px solid transparent;\n          background: #fff;\n        }\n\n        td {\n          &:first-child {\n            padding-left: ", ";\n\n            border-radius: ", ";\n          }\n\n          &:last-child {\n            padding-right: ", ";\n\n            border-radius: ", ";\n          }\n        }\n      }\n    }\n  }\n"], ["\n  table {\n    width: 100%;\n    border-spacing: 0 ", ";\n    border-collapse: separate;\n    font-weight: 500;\n\n    thead {\n      th {\n        padding: ", ";\n\n        &:first-child {\n          padding-left: ", ";\n        }\n\n        &:last-child {\n          padding-right: ", ";\n        }\n\n        color: ", ";\n        text-align: left;\n        text-transform: uppercase;\n        font-weight: 700;\n        font-size: 12px;\n      }\n    }\n\n    tbody {\n      tr {\n        border-radius: ", ";\n\n        &:hover {\n          td {\n            background: #e9f1f5;\n            border-bottom-color: #d1d9dd;\n          }\n        }\n\n        td {\n          padding: ", ";\n\n          text-align: left;\n\n          border-bottom: 2px solid transparent;\n          background: #fff;\n        }\n\n        td {\n          &:first-child {\n            padding-left: ", ";\n\n            border-radius: ", ";\n          }\n\n          &:last-child {\n            padding-right: ", ";\n\n            border-radius: ", ";\n          }\n        }\n      }\n    }\n  }\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledTableList = _styledComponents2.default.div(_templateObject, function (_ref) {
  var theme = _ref.theme;
  return theme.spacing_s;
}, function (_ref2) {
  var spacing_s = _ref2.theme.spacing_s;
  return spacing_s + " " + spacing_s;
}, function (_ref3) {
  var spacing_m = _ref3.theme.spacing_m;
  return spacing_m;
}, function (_ref4) {
  var spacing_m = _ref4.theme.spacing_m;
  return spacing_m;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.c_text_alt;
}, function (_ref6) {
  var spacing_s = _ref6.theme.spacing_s;
  return spacing_s;
}, function (_ref7) {
  var _ref7$theme = _ref7.theme,
      spacing_m = _ref7$theme.spacing_m,
      spacing_s = _ref7$theme.spacing_s;
  return spacing_m + " " + spacing_s;
}, function (_ref8) {
  var spacing_m = _ref8.theme.spacing_m;
  return spacing_m;
}, function (_ref9) {
  var spacing_s = _ref9.theme.spacing_s;
  return spacing_s + " 0 0 " + spacing_s;
}, function (_ref10) {
  var spacing_m = _ref10.theme.spacing_m;
  return spacing_m;
}, function (_ref11) {
  var spacing_s = _ref11.theme.spacing_s;
  return "0 " + spacing_s + " " + spacing_s + " 0";
});

var TH = function TH(_ref12) {
  var children = _ref12.children,
      rest = _objectWithoutProperties(_ref12, ["children"]);

  return _react2.default.createElement(
    "th",
    rest,
    children
  );
};
var TD = function TD(_ref13) {
  var children = _ref13.children,
      rest = _objectWithoutProperties(_ref13, ["children"]);

  return _react2.default.createElement(
    "td",
    rest,
    children
  );
};

// -- exports
var TableList = exports.TableList = function TableList(_ref14) {
  var _ref14$headings = _ref14.headings,
      headings = _ref14$headings === undefined ? [] : _ref14$headings,
      _ref14$rows = _ref14.rows,
      rows = _ref14$rows === undefined ? [] : _ref14$rows;

  var tableHeader = headings.length === 0 ? null : _react2.default.createElement(
    "thead",
    null,
    _react2.default.createElement(
      "tr",
      null,
      headings.map(function (heading, idx) {
        return _react2.default.createElement(
          TH,
          { key: idx },
          heading
        );
      })
    )
  );

  var tableBody = rows.length === 0 ? null : _react2.default.createElement(
    "tbody",
    null,
    rows.map(function (row, idx) {
      return _react2.default.createElement(
        "tr",
        { key: idx },
        row.map(function (col, idx) {
          return _react2.default.createElement(
            TD,
            { key: idx },
            col
          );
        })
      );
    })
  );

  return _react2.default.createElement(
    StyledTableList,
    null,
    _react2.default.createElement(
      "table",
      null,
      tableHeader,
      tableBody
    )
  );
};

TableList.TH = TH;
TableList.TD = TD;