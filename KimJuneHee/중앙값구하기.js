// 변수 할당 O
function solution(array) {
  let newArr = array.sort((a, b) => a - b);
  return newArr[Math.floor(newArr.length / 2)];
}

// 변수 할당 X
function solution(array) {
  return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
}