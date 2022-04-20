function palindromeNumbers(arr) {
    function isPalindrome(arr) {
      for (let index = 0; index < arr.length; index++) {
        let currNumber = arr[index].toString();
        let currentArr = [];
        for (let i = 0; i < currNumber.length; i++) {
          let currElementOfNumber = String(currNumber[i]);
          currentArr.push(currElementOfNumber);
        }

        if (arr[index] == Number(currentArr.reverse().join(""))) {
          console.log("true")
        } else {
          console.log("false")
        }
      }
    }
  isPalindrome(arr);

// second resolution below
//  function isPalindrome(nums) {
//     let startNum = nums;
//     let reversedNum = Number(startNum.toString().split("").reverse().join(""));
//     if (startNum == reversedNum) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//   for (let index = 0; index < arr.length; index++) {
//       let currNum = arr[index];
//     console.log(isPalindrome(currNum));
//   }
}

palindromeNumbers([123, 323, 421, 121]);
