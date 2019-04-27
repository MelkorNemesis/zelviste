"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.minLength = exports.required = exports.email = undefined;
exports.validator = validator;

var _rambda = require("rambda");

var _decorators = require("../decorators");

var _helpers = require("../helpers");

var _validations = require("./validations");

var v = _interopRequireWildcard(_validations);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function validator(validations) {
  return function validate(val) {
    if (!Array.isArray(validations)) {
      validations = [validations];
    }

    for (var i = 0; i <= validations.length - 1; i++) {
      var err = validations[i](val);
      if (err) {
        return err;
      }
    }

    return undefined;
  };
}

var formikValidate = function formikValidate(validateFn, message) {
  return (0, _rambda.compose)(_helpers.trueToUndefined, (0, _decorators.withMessageOnFalse)(message), validateFn);
};

var email = exports.email = formikValidate(v.email, "Email musít být ve formátu x@y.z.");
var required = exports.required = formikValidate(v.required, "Povinné pole.");
var minLength = exports.minLength = formikValidate(v.minLength, "Pole je příliš krátké.");