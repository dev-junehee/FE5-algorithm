// replaceAll 메소드 사용
function solution(my_string, letter) {
  return my_string.replaceAll(letter, '')
}

// split, join 메소드 사용
function solution(my_string, letter) {
  const answer = my_string.split(letter).join('')
  return answer;
}

// 전개 연산자, filter, join 메소드 사용
function solution(my_string, letter) {
  return [...my_string].filter(v => v !== letter).join('')
}