const solution = (num_list, n) => {
  arr = [];
  for (i = 0; i < num_list.length / n; i++) {
    arr.push([]);
    for (j = i * n; j < i * n + n; j++) {
      arr[i].push(num_list[j]);
    }
  }
  return arr;
};
