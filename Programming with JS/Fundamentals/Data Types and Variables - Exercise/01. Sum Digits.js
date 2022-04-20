function sumDigit(num) {
  let numToString = num.toString();
  let sum = 0;
  for (let i = 0; i < numToString.length; i++) {
    let current = Number(numToString[i]);
    sum += current;
  }
  console.log(sum);
}
sumDigit(245678);
