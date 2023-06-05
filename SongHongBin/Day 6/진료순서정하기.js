const solution = (emergency) => {
  temp = new Array(emergency.length).fill(1);
  for (i = 0; i < emergency.length; i++) {
    for (j = 0; j < emergency.length; j++) {
      if (emergency[i] < emergency[j]) temp[i]++;
    }
  }
  return temp;
};
