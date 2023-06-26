const solution = (my_string) =>
  my_string.match(/\d/g).reduce((acc, cur) => (acc += Number(cur)), 0);
