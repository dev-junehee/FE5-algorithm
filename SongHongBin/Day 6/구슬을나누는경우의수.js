const combi = (n) => (n == 0 ? 1 : n * combi(n - 1));
const solution = (balls, share) =>
  Math.round(combi(balls) / (combi(balls - share) * combi(share)));
