function passwordValidator(input) {
  // •	The length should be 6 - 10 characters (inclusive) - done
  // •	It should consist only of letters and digits
  // •	It should have at least 2 digits

  function isLengthEnough(mypass) {
    let mypass1 = mypass.toString();
    return mypass1.length >= 6 && mypass1.length <= 10;
  }

  function isOnlyLettersAndDigits(mypass) {
    let mypass1 = mypass.toString();
    for (let currEl of mypass1) {
      let checkEl = currEl.charCodeAt();

      if (
        !(checkEl >= 48 && checkEl <= 57) &&
        !(checkEl >= 65 && checkEl <= 90) &&
        !(checkEl >= 97 && checkEl <= 122)
      ) {
        return false;
      }
    }
    return true;
  }


  function areAtLeastTwoDigits(mypass){
    let currElement = String(mypass);
    let counter = 0;
    for (let iterator of currElement) {
        let charFromIterator = iterator.charCodeAt();
        if(charFromIterator>=48 && charFromIterator<=57){
            counter++;
        }
    }
    return counter>=2 ? true:false;
  }


  let checkLenght = isLengthEnough(input);
  let lettersAndDigits = isOnlyLettersAndDigits(input);
  let twoDigits = areAtLeastTwoDigits(input);

  if(checkLenght && lettersAndDigits && twoDigits){
      console.log(`Password is valid`);
  }

  if (!checkLenght) {
      console.log(`Password must be between 6 and 10 characters`);
  }

  if(!lettersAndDigits){
      console.log("Password must consist only of letters and digits");
  }

  if(!twoDigits){
      console.log("Password must have at least 2 digits");
  }
}

passwordValidator(["logIn"]);
console.log("-------------");
passwordValidator(["MyPass123"]);
console.log("-------------");
passwordValidator(["Pas$$$"]);
