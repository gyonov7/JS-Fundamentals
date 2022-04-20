function negativeOrPositive(arr) {
  let result = [];

  for (let index = 0; index < arr.length; index++) {
    let element = Number(arr[index]);

    if (element < 0) {
      result.unshift(element);
    } else {
      result.push(element);
    }

  
  }
  console.log(result.join('\n'));
  
}

negativeOrPositive(["7", "-2", "8", "9"]);
