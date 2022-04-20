function rotation (arr, num){

    let resArr = [];
for (let index = 0; index < num; index++) {
    
    let curr = arr.shift();
    arr.push(curr);
    
    
}
console.log(arr.join(" "));
}
rotation([51, 47, 32, 61, 21], 2);
console.log('--------------------');
rotation([2, 4, 15, 31], 5);
