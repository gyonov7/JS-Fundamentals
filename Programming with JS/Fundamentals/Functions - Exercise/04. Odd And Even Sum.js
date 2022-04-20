function oddAndEvenSum (num){
    let numToString = num.toString();

function totalOddSum (numToString){
    let oddSum = 0;
    for (let index = 0; index < numToString.length; index++) {
        let currElement = Number(numToString[index]);

        if (currElement%2!==0) {
            oddSum+=currElement;
        }
        
    }
    return oddSum;
}

function totalEvenSum (numToString){
    let evenSum = 0;
    for (let index = 0; index < numToString.length; index++) {
        let currElement = Number(numToString[index]);

        if (currElement%2==0) {
            evenSum+=currElement;
        }
        
    }
    return evenSum;
}

console.log(`Odd sum = ${totalOddSum(numToString)}, Even sum = ${totalEvenSum(numToString)}`);

    // let evenSum = 0;
    // let oddSum = 0;
    // for (let index = 0; index < numToString.length; index++) {
    //     let currElement = Number(numToString[index]);
    //     if (currElement %2==0) {
    //         evenSum+=currElement;
    //     }else{
    //         oddSum +=currElement
    //     }
    // }
    // console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);