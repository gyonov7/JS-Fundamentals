function cutAndReverse(input){
let leftHalf = input.substring(0,input.length/2);
let rightHalf = input.substring(input.length/2);

console.log(Array.from(leftHalf).reverse().join(''));
console.log(Array.from(rightHalf).reverse().join(''));

}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
