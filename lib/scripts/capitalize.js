"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.capitalize = void 0;
var capitalize = function capitalize(val) {
  return val && typeof val === "string" ? val.charAt(0).toUpperCase() + val.slice(1).toLowerCase() : null;
};
exports.capitalize = capitalize;