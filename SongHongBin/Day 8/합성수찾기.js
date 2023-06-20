const composite = (number) => {
  let cnt = 0;
  for (let i = 1; i <= number; i++) {
    if (number % i == 0) cnt++;
  }
  return cnt > 2 ? true : false;
};
const solution = (n) => {
  let a = 3;
  let cnt = 0;
  for (i = 3; i <= n; i++) {
    if (composite(i)) cnt++;
  }

  return cnt;
};
