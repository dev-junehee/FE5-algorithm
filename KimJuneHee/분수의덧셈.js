function solution(numer1, denom1, numer2, denom2) {
  // 분모
  let a = denom1 * denom2
  // 분자
  let b = (numer1 * denom2) + (numer2 * denom1)
  // 최대공약수 초기값
  let gcd = 1;
  
  for (let i = 2; i <= a; i++) {
      if (a % i === 0 && b % i === 0) {
          gcd = i
      }
  }

  return [b / gcd, a / gcd]
}