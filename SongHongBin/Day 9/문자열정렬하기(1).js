// const solution = (my_string) => my_string.replace(/[^0-9]/g,"").split("").map((element)=>Number(element)).sort((a,b)=>a-b)

const solution = (my_string) =>
  my_string
    .match(/\d/g)
    .sort((a, b) => a - b)
    .map((n) => Number(n));
