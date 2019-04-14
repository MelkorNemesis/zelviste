"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.email = email;
exports.required = required;
exports.minLength = minLength;

var _yup = require("yup");

function email(val, message) {
  var schema = (0, _yup.string)().email(message || "Špatně zadaný e-mail");
  return schema.isValidSync(val);
}

function required(val, message) {
  var schema = (0, _yup.string)().required(message || "Položka je povinná.");
  return schema.isValidSync(val);
}

function minLength(min) {
  return function validateMinLength(val, message) {
    var defaultMessage = function defaultMessage(min) {
      return "Polo\u017Eka mus\xED m\xEDt alespo\u0148 " + min + " znak\u016F.";
    };
    var schema = (0, _yup.string)().min(min, message || defaultMessage());
    return schema.isValidSync(val);
  };
}