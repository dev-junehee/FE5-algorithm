// const solution = (my_string) => [...my_string].filter((element)=>["a","e","i","o","u"].find(vowel=>vowel==element)==undefined).join("")

const solution = (my_string) =>
  [...my_string]
    .filter((element) => ["a", "e", "i", "o", "u"].includes(element) === false)
    .join("");

// const solution = (my_string) => my_string.replace(/[aeiou]/g, '')
