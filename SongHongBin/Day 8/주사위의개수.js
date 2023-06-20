// max
const solution = (box, n) => box.reduce((acc, cur) => (acc *= ~~(cur / n)), 1);
