function storage(input) {
  let result = {};

  for (let line of input) {
    let [item, qty] = line.split(" ");
    qty = Number(qty);

    let existing = 0;
    if (result.hasOwnProperty(item)) {
      existing = result[item];
    }
    result[item] = qty + existing;
  }

  for (let [product, qty] of Object.entries(result)) {
    console.log(product, "->", qty);
  }
}

storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
console.log("---");
storage(["apple 50", "apple 61", "coffee 115", "coffee 40"]);
