export const caesarCipher = (str, shift) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const strArr = str.split("");

  const shiftedStr = strArr.map((char) => {
    if (/[a-z]/i.test(char)) {
      const isUpperCase = char === char.toUpperCase();
      const charLower = char.toLowerCase();
      const currentIndex = alphabet.indexOf(charLower);
      let shiftedIndex = (currentIndex + shift) % 26;
      if (shiftedIndex < 0) shiftedIndex += 26;
      let shiftedChar = alphabet[shiftedIndex];
      if (isUpperCase) shiftedChar = shiftedChar.toUpperCase();
      return shiftedChar;
    } else {
      return char;
    }
  });

  return shiftedStr.join("");
};
