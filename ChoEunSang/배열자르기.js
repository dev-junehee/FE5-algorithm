function solution(numbers, num1, num2) {
  return numbers.slice(num1, num2 + 1)
}

//slice(추출 시작 인덱스, 추출 종료 인덱스)
// 추출 시작 인덱스부터 추출 종료 인덱스 전까지 얕은 복사해서 새로운 배열 객체로 반환