import { calculator } from "./calculator";

describe("add", () => {
  test("should add two numbers", () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  test("should throw an error if less than two arguments are provided", () => {
    expect(() => calculator.add(2)).toThrow("Invalid number of arguments");
  });

  test("should throw an error if arguments are not numbers", () => {
    expect(() => calculator.add(2, "3")).toThrow("Invalid argument type");
  });
});

describe("subtract", () => {
  test("should subtract two numbers", () => {
    expect(calculator.subtract(5, 3)).toBe(2);
  });

  test("should throw an error if less than two arguments are provided", () => {
    expect(() => calculator.subtract(5)).toThrow("Invalid number of arguments");
  });

  test("should throw an error if arguments are not numbers", () => {
    expect(() => calculator.subtract(5, "3")).toThrow("Invalid argument type");
  });
});

describe("divide", () => {
  test("should divide two numbers", () => {
    expect(calculator.divide(6, 2)).toBe(3);
  });

  test("should throw an error if less than two arguments are provided", () => {
    expect(() => calculator.divide(6)).toThrow("Invalid number of arguments");
  });

  test("should throw an error if arguments are not numbers", () => {
    expect(() => calculator.divide(6, "2")).toThrow("Invalid argument type");
  });

  test("should throw an error when dividing by zero", () => {
    expect(() => calculator.divide(6, 0)).toThrow("Cannot divide by zero");
  });
});

describe("multiply", () => {
  test("should multiply two numbers", () => {
    expect(calculator.multiply(2, 3)).toBe(6);
  });

  test("should throw an error if less than two arguments are provided", () => {
    expect(() => calculator.multiply(2)).toThrow("Invalid number of arguments");
  });

  test("should throw an error if arguments are not numbers", () => {
    expect(() => calculator.multiply(2, "3")).toThrow("Invalid argument type");
  });
});
