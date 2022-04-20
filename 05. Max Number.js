function maxNumber(arr) {
  
  let resArr = [];

  for (let index = 0; index < arr.length; index++) {
    let num = arr[index];
    let isBigger = true;
    for (let j = index + 1; j < arr.length; j++) {
      let num2 = arr[j];

      if (num > num2) {
        continue;
      } else {
        isBigger = false;
        break;
      }
    }

    if (isBigger) {
      resArr.push(num);
    }
  }
  console.log(resArr.join(" "));
}
maxNumber([1, 4, 3, 2]);
console.log('-------------------------');
maxNumber([14, 24, 3, 19, 15, 17]);
console.log('-------------------------');
maxNumber([41, 41, 34, 20]);
console.log('-------------------------');
maxNumber([27, 19, 42, 2, 13, 45, 48]);
