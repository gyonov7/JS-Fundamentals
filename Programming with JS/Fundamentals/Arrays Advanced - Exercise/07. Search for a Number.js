function search(arr1, arr2) {
let numToTake = arr2.shift();
let numToDelete = arr2.shift();
let numToSearch = arr2.shift();

let arrAfterTaken=arr1.splice(0,numToTake);
arrAfterTaken.splice(0,numToDelete);
let counter = 0;
for (let currNum of arrAfterTaken) {
    if(currNum== numToSearch)
    counter++;

}
console.log(`Number ${numToSearch} occurs ${counter} times.`);
}

search([5, 2, 3, 4, 1, 6], [5, 2, 3]);
