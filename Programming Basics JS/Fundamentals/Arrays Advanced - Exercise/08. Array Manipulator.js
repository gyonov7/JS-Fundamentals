function arrayManipulator(arr1, commandsArr) {
  for (let i = 0; i < commandsArr.length; i++) {
    let token = commandsArr[i].split(" ");

    let command = token.shift();

    while (command != "print") {
      switch (command) {
        case "add":
          let indexToAdd = Number(token.shift());
          let numToAdd = Number(token.shift());
          arr1.splice(indexToAdd, 0, numToAdd);
          break;
        case "addMany":
          let indexAddMany = Number(token.shift());
          
          arr1.splice(indexAddMany, 0, ...token.map(Number));
          //console.log(arr1);
          //   for (let j = 1; j < token.length; j++) {
          //     arr1.push(Number(token[j]));
          //}
          break;
        case "contains":
          console.log(arr1.indexOf(Number(token[0])));
          break;
        case "remove":
          arr1.splice(token[0], 1);
          break;
        case "shift":
          for (let k = 0; k < Number(token[0]); k++) {
            let toBeMoved = arr1.shift();
            arr1.push(toBeMoved);
          }

          break;
        case "sumPairs":
          if (arr1.length % 2 !== 0) {
            arr1.push(0);
          }
          let sumArr = [];
          for (let g = 0; g < arr1.length; g += 2) {
            sumArr.push(Number(arr1[g]) + Number(arr1[g + 1]));
          }
          arr1 = sumArr;

          break;
      }
      break;
    }
  }

  console.log(`[ ${arr1.join(", ")} ]`);
}

// arrayManipulator(
//   [1, 2, 4, 5, 6, 7],
//   ["add 1 8", "contains 1", "contains 3", "print"]
// );

arrayManipulator(
    [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
    ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]
);
