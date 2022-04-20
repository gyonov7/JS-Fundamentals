function equalArr(arr1, arr2) {
  let isEqual = true;
  for (let index = 0; index < arr1.length; index++) {
    arr1[index] = Number(arr1[index]);
  }

  for (let j = 0; j < arr2.length; j++) {
    arr2[j] = Number(arr2[j]);
  }

  let sum = 0;
  for (let index = 0; index < arr1.length; index++) {
    if (arr1[index]!==arr2[index]) {
        isEqual = false;
        console.log(`Arrays are not identical. Found difference at ${index} index`);
        break;
    }else{
        sum+=arr1[index];
    }
  }
 if (isEqual) {
     console.log(`Arrays are identical. Sum: ${sum}`);
 }
}
equalArr(["10", "20", "30"], ["10", "20", "30"]);
