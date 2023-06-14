import { capitalize } from "./capitalize";

test("Must be type of String", () => {
  expect(capitalize(124)).toBe(null);
});

test("Cannot be empty", () => {
  expect(capitalize()).toBe(null);
});

test("First letter must be capitalized", () => {
  expect(capitalize("sample text")).toBe("Sample text");
});

test("Rest of string must be lowercase", () => {
  expect(capitalize("SaMpLe TeXt")).toBe("Sample text");
});
