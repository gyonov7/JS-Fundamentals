function maxSequence(array) {
    
    let resArr = [];
    let operationalArr = [];

    for (let index = 0; index < array.length; index++) {
        operationalArr = [];

        for (let i = index; i < array.length; i++) {
            if (array[index]== array[i]) {
                operationalArr.push(array[index])
            }else{
                break;
            }

            
        }
        if (operationalArr.length > resArr.length) {
            resArr = operationalArr;
        }
    }
    console.log(resArr.join(" "));
}


maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
console.log("---------------------");
maxSequence([1, 1, 1, 2, 3, 1, 3, 3]);
