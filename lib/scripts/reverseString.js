"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reverseString = void 0;
var reverseString = function reverseString(val) {
  return val && typeof val === "string" ? val.split("").reverse().join("") : null;
};
exports.reverseString = reverseString;