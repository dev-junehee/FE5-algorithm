function solution(emergency) {
  let order = [...emergency].sort((a, b) => b - a);
  return emergency.map(v => order.indexOf(v) + 1)
}

// sort() 메소드는 원본을 변경하므로 전개 연산자를 사용하여 emergency 복사 후 sort() 사용
// 응급도가 큰 순서대로 정렬해야 하므로, 내림 차순 정렬 sort((a, b) => b - a)
// 순서가 정렬되지 않은 원본 emergency의 요소에 map() 메소드를 통해 접근
// 해당 요소를 정렬된 order에서 찾아 인덱스 값의 + 1 값을 출력한다. (length로 접근해야 하므로)