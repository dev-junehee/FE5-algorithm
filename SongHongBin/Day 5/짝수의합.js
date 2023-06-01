const solution = (n) => {
  let res = 0;
  for (let i = 2; i <= n; i += 2) res += i;
  return res;
};
