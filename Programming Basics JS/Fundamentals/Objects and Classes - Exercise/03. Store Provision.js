function store(currentStock, orderStock) {
let myStock = {};

    for (let index = 0; index < currentStock.length; index+=2) {
        myStock[currentStock[index]]=Number(currentStock[index+1]);
    }

    
    for (let index = 0; index < orderStock.length; index+=2) {
        let product = orderStock[index];
        
        if(!myStock.hasOwnProperty(product)){
            myStock[product] = 0;
        }
        myStock[product]+=Number(orderStock[index+1]);
    }
  
    for (let product in myStock) {
          console.log(`${product} -> ${myStock[product]}`);
    }
    
}

store(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
