function solution(n) {
  let count = 0;
  
  for(let i = 1; i <= n; i++) {
    if (n % i === 0) count++;
  }
  return count
}

// a + b = n인 경우의 순서쌍 (a, b)를 찾는 문제
// a와 b는 n의 약수
// 약수의 개수는 순서쌍의 개수와 같다