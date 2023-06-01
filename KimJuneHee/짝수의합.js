// 배열 메소드 사용
function solution(n) {
  let even = [];

  for(let i = 0; i <= n; i += 2) {
    even.push(i)
  }

  return even.reduce((acc, cur) => acc + cur)
}

// 수열 공식 사용
function solution(n) {
  var half = Math.floor(n / 2);
  return half * (half + 1);
}

// 더하기 할당 사용
function solution(n) {
  var answer = 0;

  for(let i=2 ; i<=n ; i+=2)
    answer += i;

  return answer;
}

