function addAndSubtract(num1, num2, num3) {


  function add(firstNum, secondNum) {
    return firstNum + secondNum;
  }



  function subtract(addResult, thirdNum) {
    return addResult - thirdNum;
  }

  

  let addResult = add(num1, num2);
  let finalResult = subtract(addResult, num3);

  console.log(finalResult);
}
addAndSubtract(1, 2, 3);
