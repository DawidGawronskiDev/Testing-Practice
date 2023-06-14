export const capitalize = (val) => {
  return val && typeof val === "string"
    ? val.charAt(0).toUpperCase() + val.slice(1).toLowerCase()
    : null;
};
