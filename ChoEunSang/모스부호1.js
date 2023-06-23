function solution(letter) {
  morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
}
  let newArr = []
  const matchLetter = letter.split(' ')
  for(i=0; i < matchLetter.length; i++) {
    newArr.push(morse[matchLetter[i]]) 
  }
    return newArr.join('')
}


// reduce를 활용한 다른 풀이
return letter.split(' ').reduce((prev, curr) => prev + morse[curr], '')


// 홍빈, 준희 님 풀이
morse = { 
  '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
  '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
  '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
  '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
  '-.--':'y','--..':'z'    
  }
const solution = (letter) => letter.split(" ").map((l)=>morse[l]).join("")