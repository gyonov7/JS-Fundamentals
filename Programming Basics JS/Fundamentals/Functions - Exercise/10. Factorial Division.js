function factorialDivision(num1, num2) {
  let firstFacturialSum = firstFacturial(num1);
  let secondFactorialSum = secondFactorial(num2);

  let result = (firstFacturialSum / secondFactorialSum).toFixed(2);

  console.log(result);

  function firstFacturial(number) {
    let firstFacturial = 1;
    for (let index = num1; index >= 1; index--) {
      let element = index;
      firstFacturial *= index;
    }
    return firstFacturial;
  }

  function secondFactorial(number) {
    let secondFactorial = 1;

    for (let index = num2; index >= 1; index--) {
      let element = index;
      secondFactorial *= index;
    }
    return secondFactorial;
  }
}

factorialDivision(5, 2);
factorialDivision(6, 2);
