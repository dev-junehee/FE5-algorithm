// #1
function solution(num_list) {
  const a = num_list.filter(num => num % 2 === 0 ).length;
  return [a, num_list.length - a];
 }


 // 다른 풀이 1
 function solution(num_list) {
  var answer = [0,0];

  for(let a of num_list) {
      answer[a % 2] += 1
  }
  return answer;
}

// 다른 풀이 2
function solution(arr) {
  let a= 0, b=0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2) {
      b++;
  } else {
      a++;
  }
}
return [a, b]
}




 

 