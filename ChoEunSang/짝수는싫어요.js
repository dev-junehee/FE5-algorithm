function solution(n) {
  let arr = [];
  
  for( i = 0; i <= n ; i ++) {
      if ( i % 2 ) {
       arr.push(i)    
      }
  }
  return arr
}