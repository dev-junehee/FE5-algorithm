const solution = (numbers, k) => {
  let idx = 0;
  for (i = 1; i < k; i++) {
    idx += 2;
  }
  return numbers[idx % numbers.length];
};
// 홍빈, 은상, 근우, 준희, 동은
//  0    1     2    3     4

// 1 2 3 4 5 6 7
// 1 2 3 4 5 1 2

// 총 5명중에 6번째는 누굴까요?
// 6%5
