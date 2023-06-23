function solution(hp) {
let a = Math.floor( hp / 5 ) 
let b = Math.floor( (hp - (a * 5))/3 )
let c = hp - ( a * 5 ) - ( b * 3 )

return a + b + c

}

// 홍빈 님 답안
const solution = (hp) => {
  cnt = 0
  for (i of [5,3,1]){
      cnt += parseInt(hp/i)
      hp%=i
  }
  return cnt
}

