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

// 두수의 나눗셈

function solution(num1, num2) {
  var answer = 0;
  return parseInt(num1 / num2 * 1000);
}

//피자나눠먹기 1
function solution(n) {
  return n % 7 === 0 ? n / 7 : Math.floor(n / 7 )+1 ;
}
//피자나눠먹기 2
function solution( n ) {
	let pizza = 6;
	while ( true ) {
		if ( pizza % n === 0 ) {
			break;
		}
		pizza += 6;
	}
	return pizza / 6;
}
//피자나눠먹기 3

function solution(slice, n) {
  var answer = 0;
  answer = Math.floor( (n - 1) / slice) + 1;
  return answer;
}

//배열의 평균값

function solution(numbers) {
  var answer = 0;
  for(i = 0; i < numbers.length; i++) {
      answer += numbers[i]
  }
  answer = answer / numbers.length
  
  return answer;
}