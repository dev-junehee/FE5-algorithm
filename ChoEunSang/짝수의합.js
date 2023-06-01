function solution(n) {
  let a = 0;
  for ( i =1; i <= n ; i++) {
    if (i % 2 === 0) {
        a += i
    }    
  }
  return a;
}


// 다른 풀이
function solution(n) {
  let a = 0;
  for ( i =2; i <= n ; i+=2) {
          a += i
  }
  return a;
}