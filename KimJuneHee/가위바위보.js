// for문 내 if ~ else if 사용
function solution(rsp) {
  let winner = '';
  
  for (let i = 0; i < rsp.length; i++) {
    if (rsp[i] === "0") winner += "5";
    else if (rsp[i] === "2") winner += "0";
    else if (rsp[i] === "5") winner += "2";
  }
  return winner;
}

// for문 내 switch 사용
function solution(rsp) {
  let winner = '';
  
  for (let i = 0; i < rsp.length; i++) {
    switch(rsp[i]) {
      case '2':
        winner += "0"
        break;
      case '0':
        winner += "5"
        break;
      case '5':
        winner += "2"
        break;
    }
  }

  return winner
}

// 객체 사용
function solution(rsp) {
  let winner = {
    "2": "0",
    "0": "5",
    "5": "2"
  }
  
  return [...rsp].map(v => winner[v]).join("")
}

// 삼항연산자 사용
function solution(rsp) {
  return rsp.split("").map((v) => v === "2" ? 0 : (v === "0" ? 5 : 2)).join("")
}