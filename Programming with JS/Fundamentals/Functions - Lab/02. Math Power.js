function mathPower(num, pow) {
  let result = 1;
  for (let index = 1; index <= pow; index++) {
    result *= num;
  }
  console.log(result);
}
mathPower(2, 8);
mathPower(3, 4);
mathPower(3, 10);
