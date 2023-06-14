export const reverseString = (val) => {
  return val && typeof val === "string"
    ? val.split("").reverse().join("")
    : null;
};
