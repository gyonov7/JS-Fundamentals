function districtArr(array) {
  for (let index = 0; index < array.length; index++) {
    let curEl = array[index];
    for (let j = index + 1; j < array.length; j++) {
      let secondCurEl = array[j];
      if (curEl == array[j]) {
        array.splice(j, 1);
        j--;
      }
    }
  }

  console.log(array.join(" "));
}

districtArr([1, 2, 3, 4]);
districtArr([7, 8, 9, 7, 2, 3, 4, 1, 2]);
districtArr([20, 8, 12, 13, 4, 4, 8, 5]);
