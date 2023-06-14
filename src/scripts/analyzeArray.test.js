import { analyzeArray } from "./analyzeArray";

test("should return an object with average, min, max, and length properties", () => {
  const result = analyzeArray([1, 2, 3, 4, 5]);

  expect(result).toHaveProperty("average");
  expect(result).toHaveProperty("min");
  expect(result).toHaveProperty("max");
  expect(result).toHaveProperty("length");
});

test("should calculate the average of the numbers", () => {
  const result = analyzeArray([1, 2, 3, 4, 5]);

  expect(result.average).toBe(3);
});

test("should determine the minimum value in the array", () => {
  const result = analyzeArray([10, 5, 8, 2, 6]);

  expect(result.min).toBe(2);
});

test("should determine the maximum value in the array", () => {
  const result = analyzeArray([10, 5, 8, 2, 6]);

  expect(result.max).toBe(10);
});

test("should calculate the length of the array", () => {
  const result = analyzeArray([1, 2, 3, 4, 5]);

  expect(result.length).toBe(5);
});

test("should throw an error for invalid input", () => {
  expect(() => analyzeArray("not an array")).toThrow(
    "Invalid input. Expected an array of numbers."
  );

  expect(() => analyzeArray([])).toThrow(
    "Invalid input. Expected an array of numbers."
  );
});
