const map = {
  2: "0",
  0: "5",
  5: "2",
};
const solution = (rsp) =>
  rsp.split("").reduce((acc, cur) => (acc += map[cur]), "");
