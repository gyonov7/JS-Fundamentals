function condense(arr) {
  let sum = 0;

  while (arr.length>1) {
    let condesed = [];
    for (let index = 0; index < arr.length - 1; index++) {
      condesed.push(arr[index] + arr[index + 1]);
    }
    arr = condesed;
    
  }

console.log(Number(arr[0]));
}

condense([5, 0, 4, 1, 2]);
console.log("----------------");
condense([2,10,3])
console.log("----------------");
condense([1]);
