
// 홍빈 님 답안
const combi = (n) => n==0?1:n*combi(n-1)
// 5*combi(4)
// combi(4) - 4*combi(3)
// 
// combi(2) = 2*combi(1)
// combi(1) = 1*combi(0)
// combi(0) = 1
// 1*2*3*4*5
const solution = (balls, share) => Math.round(combi(balls)/(combi(balls-share)*combi(share)))