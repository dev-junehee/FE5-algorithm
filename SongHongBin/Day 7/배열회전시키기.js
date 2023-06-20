const solution = (numbers, direction) => {
  arr = new Array(numbers.length);
  if (direction === "right") {
    for (i = 0; i < numbers.length; i++) {
      arr[(i + 1) % numbers.length] = numbers[i];
    }
  } else if (direction === "left") {
    for (i = 0; i < numbers.length; i++) {
      if (i == 0) arr[numbers.length - 1] = numbers[i];
      else arr[(i - 1) % numbers.length] = numbers[i];
    }
  }
  return arr;
};
// function solution(numbers, direction) {
//   if (direction === "left") {
//     const first = numbers.shift();
//     numbers.push(first);
//   } else if (direction === "right") {
//     const last = numbers.pop();
//     numbers.unshift(last);
//   }

//   return numbers;
// }
