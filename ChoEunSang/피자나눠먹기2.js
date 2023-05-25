function solution(n) {
  let result = 1; 
  while ( (result * 6)  % n !== 0 ) {
      result ++ ;
  }
  return result;
}

//입출력 예
// n = 6명 -> 1판 (1 * 6 = 6조각)
// n = 10명 -> 5판 (5 * 6 = 30조각)
// n = 4명 -> 2판 (2 * 6 = 12조각)