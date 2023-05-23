const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));

const solution = (numer1, denom1, numer2, denom2) => {
  let numer = denom1 * numer2 + denom2 * numer1;
  let denom = denom1 * denom2;
  let g = gcd(denom, numer);
  return [numer / g, denom / g];
};
