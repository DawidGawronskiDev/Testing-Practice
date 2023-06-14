export const analyzeArray = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("Invalid input. Expected an array of numbers.");
  }

  const length = arr.length;
  const sum = arr.reduce((acc, num) => acc + num, 0);
  const average = sum / length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return {
    average,
    min,
    max,
    length,
  };
};
