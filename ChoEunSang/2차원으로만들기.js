function solution(num_list, n) {
  let newArr = []
  
  while ( num_list.length ) {
    newArr.push(num_list.splice(0,n))
  }
 
  return newArr
}

// while 문 - 조건식이 true 일때까지 반복, false면 멈춤.
// splice 매서드는 원본 배열을 변경. 
// splice (변경 시작 인덱스, 배열에서 제거할 요소의 수 )
