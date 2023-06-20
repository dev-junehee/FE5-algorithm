const solution = (n) => {
  let sum = 1;
  let count = 1;
  while (sum * count <= n) {
    sum *= count;
    count++;
  }
  return count - 1;
};
