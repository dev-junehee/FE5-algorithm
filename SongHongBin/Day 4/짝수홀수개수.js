const solution = (num_list) => {
  let a = 0;
  let b = 0;
  for (let i of num_list) {
    if (i % 2) b++;
    else a++;
  }
  return [a, b];
};
