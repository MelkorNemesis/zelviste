"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AdminThemeProvider = require("./AdminThemeProvider/AdminThemeProvider");

Object.keys(_AdminThemeProvider).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _AdminThemeProvider[key];
    }
  });
});