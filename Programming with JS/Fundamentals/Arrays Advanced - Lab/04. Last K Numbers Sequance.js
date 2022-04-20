function LastKNumbersSequance(n, k) {
  let sum = 0;
  let resultArray = [1];

  for (let index = 1; index < n; index++) {
    let lastK = resultArray.slice(-k);
    for (let index = 0; index < lastK.length; index++) {
        
      let currElement = Number(lastK[index]);
      sum += currElement;
    }
    
    resultArray.push(sum);
    sum=0;
  }
  console.log(resultArray.join(' '));
}

LastKNumbersSequance(6, 3);
LastKNumbersSequance(8,2);
