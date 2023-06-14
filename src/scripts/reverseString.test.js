import { reverseString } from "./reverseString";

test("Must be type of String", () => {
  expect(reverseString(124)).toBe(null);
});

test("Cannot be empty", () => {
  expect(reverseString()).toBe(null);
});

test("String must be reversed", () => {
  expect(reverseString("Lorem ipsum.")).toBe(".muspi meroL");
});
