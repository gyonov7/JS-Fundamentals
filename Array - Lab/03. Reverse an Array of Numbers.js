function reverse (num, arr){

    let newArr =[];

    for (let index = 0; index < num; index++) {

        let currEl = arr[index];
        newArr.push(currEl);
    }

    let result = newArr.reverse().join(" ")
console.log(result);
}

reverse(3, [10, 20, 30, 40, 50]);
