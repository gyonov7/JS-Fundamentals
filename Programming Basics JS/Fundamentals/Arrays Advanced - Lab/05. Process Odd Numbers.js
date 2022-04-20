// function processOddNumbers (array){
// let result = [];
//     for (let index = 0; index < array.length; index++) {
//         if(index%2!=0){
//             let currElement = array[index];
//             currElement*=2;
//             result.push(currElement);
//         }
        

//     }

// //     console.log(result.reverse().join(' '));
// // }
// processOddNumbers([10, 15, 20, 25]);
// processOddNumbers([3, 0, 10, 4, 7, 3]);

let myArrow = array => array.filter((element,i) => i%2!= 0).map(x=>x*2).reverse().join(' ');

console.log(myArrow([10, 15, 20, 25]));