function equalSums(arr) {
  if (arr.length < 2) {
    console.log(0);
  } else {
    let leftSum = 0;
    let rigthSum = 0;
    let noNum = true;
    for (let index = 1; index < arr.length; index++) {
      let currernt = arr[index];
      leftSum += arr[index - 1];
      rigthSum = 0;
      for (let j = arr.length - 1; j > index; j--) {
        let currentBack = arr[j];
        rigthSum += currentBack;
      }

      if (leftSum == rigthSum) {
        console.log(index);
        noNum = false;
        break;
      }
    }
    if (noNum) {
      console.log("no");
    }
  }
}

equalSums([1, 2, 3, 3]);
