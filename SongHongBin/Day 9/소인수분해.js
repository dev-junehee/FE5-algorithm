prime = [];
flag = false;
const factor = (number) => {
  if (flag == true) return;
  if (number == 1) {
    flag = true;
    return;
  }
  for (let i = 2; i <= number; i++) {
    if (number % i == 0) {
      prime.push(i);
      factor(number / i);
      return;
    }
  }
};
const solution = (n) => {
  factor(n);
  return [...new Set(prime)];
};

// const solution = (n) => {
//     var answer = [];

//     for(let i = 2; i <= n; i++) {

//         while (n % i === 0) {

//             n = n / i;
//             answer.push(i);

//         }
//     }

//     return [...new Set(answer)];
// }
