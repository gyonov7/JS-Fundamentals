function substraction (arr){

    let sumEven = 0;
    let sumOdd = 0;

    for (let num of arr ) {
        if (num%2===0) {
            sumEven+=num;
        }else{
            sumOdd+=num;
        }
    
    }
    console.log(sumEven-sumOdd);
}
substraction([1,2,3,4,5,6]);
