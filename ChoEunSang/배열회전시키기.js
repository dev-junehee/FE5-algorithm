function solution(numbers, direction) {
  if ( direction === "right") {
      numbers.unshift(...numbers.splice(numbers.length-1,1))
      return numbers
  } else if( direction === "left") {
      numbers.push(...numbers.splice(0,1))
      return numbers
  }
}


//
function solution(numbers, direction) {
  if (direction === "left") {
    const first = numbers.shift();
    numbers.push(first);
  } else if (direction === "right") {
    const last = numbers.pop();
    numbers.unshift(last);
  }
  
  return numbers;
}