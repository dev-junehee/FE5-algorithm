function solution(age) {
  const newArr = []
  const arr = Array(26).fill().map((v, i) => String.fromCharCode(i + 97));

  const x = String(age).split('')

  for(i=0; i<x.length; i++){
      newArr.push(arr[x[i]])
  }
  return newArr.join('')

}
//

//
function solution(age) {
  return age
    .toString()
    .split("")
    .map((v) => "abcdefghij"[v])
    .join("");
}