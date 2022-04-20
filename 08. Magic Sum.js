function magicSum(arr, num) {

    for (let index = 0; index < arr.length; index++) {

        for (let i = index+1; i < arr.length; i++) {
            
            sum = arr[index]+arr[i];
            if (sum == num) {
                console.log(`${arr[index]} ${arr[i]}`);
            }
            
        }
        
    }
}


magicSum([14, 20, 60, 13, 7, 19, 8], 27);
console.log('---------------');
magicSum([1, 2, 3, 4, 5, 6], 6);
