function solution(numbers) {
  let sumNum = numbers.reduce((acc, cur)=> acc + cur )
  let avg = sumNum / numbers.length
  return avg;
}