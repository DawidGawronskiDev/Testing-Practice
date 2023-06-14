import { caesarCipher } from "./caesarCipher";

describe("caesarCipher", () => {
  test("should shift each character in the string by the shift factor", () => {
    expect(caesarCipher("abc", 1)).toBe("bcd");
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });

  test("should wrap from z to a", () => {
    expect(caesarCipher("xyz", 1)).toBe("yza");
    expect(caesarCipher("z", 1)).toBe("a");
    expect(caesarCipher("abc", -1)).toBe("zab");
  });

  test("should maintain the same case", () => {
    expect(caesarCipher("Hello", 5)).toBe("Mjqqt");
    expect(caesarCipher("WORLD", 7)).toBe("DVYSK");
  });

  test("should handle punctuation and special characters", () => {
    expect(caesarCipher("Hello, World!", 10)).toBe("Rovvy, Gybvn!");
    expect(caesarCipher("Testing... 1, 2, 3!", 5)).toBe("Yjxynsl... 1, 2, 3!");
  });
});
