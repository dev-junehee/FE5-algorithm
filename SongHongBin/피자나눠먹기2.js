const gcd = (a, b) => (a % b ? gcd(b, a % b) : b);
const solution = (n) => n / gcd(n, 6);
