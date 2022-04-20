function mergeArrays(arr1, arr2) {
  let resultArr = [];

 
for (let index = 0; index < arr1.length; index++) {
    if (index%2===0) {
        let num1 = Number(arr1[index]);
        let num2 = Number(arr2[index]);
        
        resultArr.push(num1+num2);
    }else{
        resultArr.push(arr1[index]+arr2[index]);
    }
}
console.log(resultArr.join(" - "));
}

mergeArrays(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44'])
;
