function solution(n) {
  var answer = []
  for (let i = 1; i <= n; i ++) {
      if (n % i === 0) {
          answer.push(i)
      }
  }
  return answer.length
}

//
const solution = (n) => {
  cnt = 0
  for (i=1;i<=n;i++){
      if(n%i==0)cnt++
  }
  return cnt
}
//약수: 어떤 수를 나누어떨어지게 하는 수