"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculator = void 0;
var calculator = {
  _validation: function _validation(a, b) {
    if (!a || !b) throw new Error("Invalid number of arguments");
    if (typeof a !== "number" || typeof b !== "number") throw new Error("Invalid argument type");
  },
  add: function add(a, b) {
    this._validation(a, b);
    return a + b;
  },
  subtract: function subtract(a, b) {
    this._validation(a, b);
    return a - b;
  },
  divide: function divide(a, b) {
    if (b === 0) throw new Error("Cannot divide by zero");
    this._validation(a, b);
    return a / b;
  },
  multiply: function multiply(a, b) {
    this._validation(a, b);
    return a * b;
  }
};
exports.calculator = calculator;