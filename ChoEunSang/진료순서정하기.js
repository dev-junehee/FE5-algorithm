function solution(emergency) {
  const sortArr = emergency.slice().sort((a,b) => {return b - a})
  const newArr = emergency.map(item => {return sortArr.indexOf(item)+1})
  
  return newArr
 
 }

 // sort는 새로운 배열로 반환하지 않고, 기존 배열을 수정하기 때문에 먼저 slice 매소드로 배열을 복사
 // 인덱스는 0부터 시작, index +1 를 한다.