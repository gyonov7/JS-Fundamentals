function order(product, quantity) {
  // •	coffee - 1.50
  // •	water - 1.00
  // •	coke - 1.40
  // •	snacks - 2.00
  let finalSum = 0;
  switch (product) {
    case "coffee":
      finalSum = quantity * 1.5;
      break;
    case "water":
      finalSum = quantity * 1;
      break;
    case "coke":
      finalSum = quantity * 1.4;
      break;
    case "snacks":
      finalSum = quantity * 2;
      break;
   
  }
  console.log(finalSum.toFixed(2));
}

order("water", 5);
order("coffee", 2);
