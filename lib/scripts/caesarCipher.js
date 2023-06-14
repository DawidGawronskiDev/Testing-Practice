"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.caesarCipher = void 0;
var caesarCipher = function caesarCipher(str, shift) {
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var strArr = str.split("");
  var shiftedStr = strArr.map(function (_char) {
    if (/[a-z]/i.test(_char)) {
      var isUpperCase = _char === _char.toUpperCase();
      var charLower = _char.toLowerCase();
      var currentIndex = alphabet.indexOf(charLower);
      var shiftedIndex = (currentIndex + shift) % 26;
      if (shiftedIndex < 0) shiftedIndex += 26;
      var shiftedChar = alphabet[shiftedIndex];
      if (isUpperCase) shiftedChar = shiftedChar.toUpperCase();
      return shiftedChar;
    } else {
      return _char;
    }
  });
  return shiftedStr.join("");
};
exports.caesarCipher = caesarCipher;