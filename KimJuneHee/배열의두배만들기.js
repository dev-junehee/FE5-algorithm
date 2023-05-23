// for문, push 메소드 사용
function solution(numbers) {
  let answer = [];
  
  for (let i = 0; i < numbers.length; i++) {
    answer.push(numbers[i] * 2)
  }
  
  return answer;
}

// map 메소드 사용
function solution(numbers) {
  return numbers.map(v => v * 2)
}