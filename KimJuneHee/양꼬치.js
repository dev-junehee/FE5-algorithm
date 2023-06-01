function solution(n, k) {
  return (12000 * n) + (2000 * k) - (~~(n / 10) * 2000)
}

// 공부됐던 다른 사람의 답변
function solution(n, k) {
  k -= ~~(n / 10);
  if (k < 0) k = 0;
  return n * 12000 + k * 2000;
}