function passwordValidator(input) {
  let password = input.shift();
  let isValid = true;
  let line = input.shift();
  let hasLower = false;
  let hasUpper = false;
  let hasDigit = false;
  let hasUnderScore = false;
  while (line != "Complete") {
    let command = line.split(" ").shift();
    if (command == "Insert") {
      let index = Number(line.split(" ")[1]);
      if (index >= 0 && index < password.length) {
        let toInsert = line.split(" ")[2];
        let left = password.substring(0, index);
        let right = password.substring(index);
        password = left + toInsert + right;
        console.log(password);
      }
    } else if (command == "Replace") {
      let toReplace = line.split(" ")[1];
      let p1 = line.split(" ")[1].charCodeAt();
      let p2 = Number(line.split(" ")[2]);
      let newCharCode = String.fromCharCode(p1 + p2);

      if (password.includes(toReplace)) {
        password = password.split(toReplace).join(newCharCode);
        console.log(password);
      }
    } else if (command == "Make") {
      let secCommand = line.split(" ")[1];
      let index = Number(line.split(" ")[2]);

      if (secCommand == "Upper") {
        let letter = password[index];
        let newLetter = letter.toUpperCase();
        password = password.replace(letter, newLetter);
        console.log(password);
      } else if (secCommand == "Lower") {
        let letter = password[index];
        let newLetter = letter.toLowerCase();
        password = password.replace(letter, newLetter);
        console.log(password);
      }
    } else if (command == "Validation") {
      if (password.length < 8) {
        console.log("Password must be at least 8 characters long!");
        isValid = false;
        break;
      } else {
        for (let currLetter of password) {
          if (currLetter.charCodeAt() >= 97 && currLetter.charCodeAt() <= 122) {
            hasLower = true;
            continue;
          } else if (
            currLetter.charCodeAt() >= 65 &&
            currLetter.charCodeAt() <= 90
          ) {
            hasUpper = true;
            continue;
          } else if (
            currLetter.charCodeAt() >= 48 &&
            currLetter.charCodeAt() <= 57
          ) {
            hasDigit = true;
            continue;
          } else if (currLetter.charCodeAt() == 95) {
            hasUnderScore = true;
            continue;
          } else {
            console.log(`Password must consist only of letters, digits and _!`);
            isValid = false;
            break;
          }
        }
      }
      if (isValid) {
        if (!hasUpper) {
          console.log(`Password must consist at least one uppercase letter!`);
        } else if (!hasDigit) {
          console.log(`Password must consist at least one digit!`);
        } else if (!hasLower) {
          console.log(`Password must consist at least one lowercase letter!`);
        }
      }
    }

    line = input.shift();
  }
}

passwordValidator([
  "129",
  "Add 2 p",
  "Replace i -50",
  "Replace 0 50",
  "Make Upper 2",
  "Validation",
  "Complete",
]);
console.log("---");
passwordValidator([
  "123456789",
  "Insert 3 R",
  "Replace 5 15",
  "Validation",
  "Make Lower 3",
  "Complete",
]);
