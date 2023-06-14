"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.analyzeArray = void 0;
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var analyzeArray = function analyzeArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("Invalid input. Expected an array of numbers.");
  }
  var length = arr.length;
  var sum = arr.reduce(function (acc, num) {
    return acc + num;
  }, 0);
  var average = sum / length;
  var min = Math.min.apply(Math, _toConsumableArray(arr));
  var max = Math.max.apply(Math, _toConsumableArray(arr));
  return {
    average: average,
    min: min,
    max: max,
    length: length
  };
};
exports.analyzeArray = analyzeArray;