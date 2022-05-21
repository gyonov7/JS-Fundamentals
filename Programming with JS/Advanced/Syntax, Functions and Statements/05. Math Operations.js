function mathOperations(num1, num2, operator) {
  let plus = (x, y) => x + y;
  let minus = (x, y) => x - y;
  let sqtr = (x, y) => x * y;
  let divide = (x, y) => x / y;
  let power = (x, y) => x ** y;
  let module = (x, y) => x % y;

  switch (operator) {
    case "+":
      console.log(plus(num1, num2));
      break;
    case "-":
      console.log(minus(num1, num2));
      break;
    case "*":
      console.log(sqtr(num1, num2));
      break;
    case "/":
      console.log(divide(num1, num2));
      break;
    case "**":
      console.log(power(num1, num2));
      break;
    case "%":
      console.log(module(num1, num2));
      break;
  }
}

mathOperations(5, 6, "+");
mathOperations(3, 5.5, '*');
