function solution(my_string, n) {
  let newArr = []
  const Arr = my_string.split("");
  
for(i=0; i < Arr.length; i++) {
   for(j=0; j < n; j++) {
       newArr.push(Arr[i])
   }
}
  return newArr.join("")
}