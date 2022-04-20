function softUniBar(input) {
  // /%(?<name>\w+)%<(?<product>\w+)>\|(?<qty>\d+)\|(?<price>\d+(.\d+)?)/g;
  let total = 0;
  for (let line of input) {
    if (line !== "end of shift") {
      let pattern =
        /%(?<name>[A-Z][a-z]+)%[^|%$.]*<(?<product>\w+)>[^|%$.]*\|(?<qty>\d+)\|[^|%$.]*?(?<price>[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)\$/gm;
      let executed = pattern.exec(line);
      
      if(executed==null){
          continue;
      }
      let customer = executed.groups.name;
      let productName = executed.groups.product;
      let quantity = +executed.groups.qty;
      let productPrice = +executed.groups.price;
      total += quantity * productPrice;
      console.log(
        `${customer}: ${productName} - ${(quantity * productPrice).toFixed(2)}`
      );
    }
  }

  console.log(`Total income: ${total.toFixed(2)}`);
}

// softUniBar([
//   "%George%<Croissant>|2|10.3$",
//   "%Peter%<Gum>|1|1.3$",
//   "%Maria%<Cola>|1|2.4$",
//   "end of shift",
// ]);
softUniBar([
  "%InvalidName%<Croissant>|2|10.3$",
  "%Peter%<Gum>1.3$",
  "%Maria%<Cola>|1|2.4",
  "%Valid%<Valid>|10|20$",
  "end of shift",
]);
