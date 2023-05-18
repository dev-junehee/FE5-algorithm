// 나머지 구하기

function solution(num1, num2) {
  var answer = num1 % num2;
  return answer;
}

// 두수의 곱

function solution(num1, num2) {
  var answer = num1 * num2;
  return answer;
}

// 나이 출력

function solution(age) {
  var answer = 2022 - age + 1;
  return answer;
}

// 각도기
function solution(angle) {
  if( 0 < angle && angle < 90 ){
      return 1    
  }else if(angle === 90){
      return 2
  }else if(90 < angle && angle < 180){
      return 3
  }else{ 
      return 4    
  }   
}