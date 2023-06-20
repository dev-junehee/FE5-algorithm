function solution(box, n) {  
  const [ a, b, c ] = box.map(item => parseInt(item/n))
  return a * b * c 
}