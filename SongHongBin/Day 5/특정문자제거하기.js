const solution = (my_string, letter) =>
  [...my_string].filter((word) => word != letter).join("");
