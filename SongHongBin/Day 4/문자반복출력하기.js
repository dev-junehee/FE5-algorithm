const solution = (my_string, n) =>
  [...my_string].reduce((acc, cur) => (acc += cur.repeat(n)), "");
