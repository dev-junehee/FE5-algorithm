const solution = (array) =>
  array.sort((a, b) => a - b)[parseInt(array.length / 2)];
