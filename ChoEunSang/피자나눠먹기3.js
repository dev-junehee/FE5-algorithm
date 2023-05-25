function solution(slice, n) {

  return n <= slice ? 1 : Math.ceil(n/slice)
  
}