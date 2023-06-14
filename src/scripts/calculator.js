export const calculator = {
  _validation: function (a, b) {
    if (!a || !b) throw new Error("Invalid number of arguments");
    if (typeof a !== "number" || typeof b !== "number")
      throw new Error("Invalid argument type");
  },
  add: function (a, b) {
    this._validation(a, b);
    return a + b;
  },
  subtract: function (a, b) {
    this._validation(a, b);
    return a - b;
  },
  divide: function (a, b) {
    if (b === 0) throw new Error("Cannot divide by zero");
    this._validation(a, b);
    return a / b;
  },
  multiply: function (a, b) {
    this._validation(a, b);
    return a * b;
  },
};
