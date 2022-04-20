function sumEvenNumbers(arr) {
  let sumEven = 0;
  for (let char of arr) {
    let curr = Number(char);
    if (curr % 2 == 0) {
      sumEven += curr;
    }
  }
  console.log(sumEven);
}

sumEvenNumbers(["1", "2", "3", "4", "5", "6"]);
