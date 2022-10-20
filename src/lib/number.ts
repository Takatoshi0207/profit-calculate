const isNumber = (str: string): boolean => {
  if (typeof str !== "string") {
    return false;
  }

  if (str.trim() === "") {
    return false;
  }
  console.log(Number.isNaN(str));
  return !Number.isNaN(Number(str));
};

export { isNumber };
