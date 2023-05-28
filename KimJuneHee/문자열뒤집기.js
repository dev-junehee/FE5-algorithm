// Array.from() 사용
function solution(my_string) {
  return Array.from(my_string).reverse().join('')
}

// 전개 연산자 사용
function solution(my_string) {
  return [...my_string].reverse().join('')
}

// split() 사용
function solution(my_string) {
  return my_string.split('').reverse().join('');
}