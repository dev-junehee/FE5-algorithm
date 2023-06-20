// max
const solution = (numbers) => {
  numbers.sort(function compare(a, b) {
    return a - b;
  });
  return numbers.at(-2) * numbers.at(-1);
};
