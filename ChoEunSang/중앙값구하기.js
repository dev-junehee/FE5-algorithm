// 
function solution(array) {
  let newArr = array.sort((a,b)=> a - b)
  let midIndex = Math.floor(newArr.length / 2)
  
  return newArr[midIndex]
}

//다른 풀이 (at매소드 이용)
const solution = (array) => 
    array
        .sort((a, b) => a - b)
        .at(Math.floor(array.length / 2))