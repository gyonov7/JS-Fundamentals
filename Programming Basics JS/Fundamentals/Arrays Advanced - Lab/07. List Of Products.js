function listOfProducts (array){
let sortedList = array.sort();

for (let index = 0; index < sortedList.length; index++) {
    console.log(`${index+1}.${sortedList[index]}`);
}
}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
listOfProducts(['Watermelon', 'Banana', 'Apples']);