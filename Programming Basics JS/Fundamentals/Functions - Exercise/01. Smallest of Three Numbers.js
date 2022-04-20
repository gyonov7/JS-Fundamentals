function smallestNumber(num1, num2, num3) {
  let min = Number.MAX_SAFE_INTEGER;

  if (num1 < min) {
    min=num1;
  }

  if (num2 < min) {
    min=num2;
  }

  if (num3 < min) {
    min=num3;
  }

  console.log(min);
}

smallestNumber(2, 5, 3);
