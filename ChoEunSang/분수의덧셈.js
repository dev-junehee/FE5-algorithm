// 2 (O)

function cal_gcd(num1, num2) {
     // 최대 공약수 구하기
    return num1 % num2 === 0 ? num2 : cal_gcd(num2, num1 % num2)
}

function solution(numer1, denom1, numer2, denom2) {
    let a = numer1 * denom2 + numer2 * denom1;
    let b = denom1 * denom2;
    let gcd = cal_gcd(a, b);
    
    // 최대 공약수를 분자 분모에 나누고 배열에 넣기
    return [a / gcd, b / gcd]
}




// 1 (X)
function solution(numer1, denom1, numer2, denom2) {
  if(denom1 % denom2 === 0) {
      let q = parseInt(denom1/denom2);
      let a = numer1 + numer2 * q
      let b = denom1
      retrun [a, b]
  } else if (denom2 % denom1 === 0) {
      q = parseInt(denom2/denom1);
      a = numer1 * q + numer2
      b = denom2
      return [a, b]
  } else if ( denom1 % denom2 || denom2 % denom1) {
      a = numer1 * denom2 + numer2 * denom1
      b = denom1 * denom2
      return [a, b]
  }
}