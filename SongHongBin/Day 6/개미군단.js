const solution = (hp) => {
  cnt = 0;
  for (i of [5, 3, 1]) {
    cnt += parseInt(hp / i);
    hp %= i;
  }
  return cnt;
};

// function solution(hp) {

//     let cnt = 0;

//     [5,3,1].forEach(v => {

//         cnt += Math.floor(hp/v);

//         hp = hp % v;
//     })

//     return cnt;
// }
