"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.email = email;
exports.required = required;
exports.minLength = minLength;

var _yup = require("yup");

function email(val) {
  var schema = (0, _yup.string)().email();
  return schema.isValidSync(val);
}

function required(val) {
  var schema = (0, _yup.string)().required();
  return schema.isValidSync(val);
}

function minLength(min) {
  return function validateMinLength(val) {
    var schema = (0, _yup.string)().min(min);
    return schema.isValidSync(val);
  };
}