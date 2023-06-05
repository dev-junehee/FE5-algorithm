const solution = (age) =>
  String(age)
    .split("")
    .map((e) => String.fromCodePoint(97 + parseInt(e)))
    .join("");
