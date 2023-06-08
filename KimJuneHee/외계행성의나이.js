// 배열 사용
function solution(age) {
  const alphabet = [
    'a', 'b', 'c', 'd', 'e',
    'f', 'g','h', 'i', 'j'
  ]
  return age.toString().split('').map(i => alphabet[i]).join('')
}

// 객체 사용
function solution(age) {
  const alphabet = {
    0: "a",
    1: "b",
    2: "c",
    3: "d",
    4: "e",
    5: "f",
    6: "g",
    7: "h",
    8: "i",
    9: "j"
  }
  return age.toString().split('').map(i => alphabet[i]).join('')
}