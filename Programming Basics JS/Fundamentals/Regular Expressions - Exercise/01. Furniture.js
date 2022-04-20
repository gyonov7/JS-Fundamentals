function funrniture(input) {
  let totalSum = 0;
  console.log("Bought furniture:");

  for (let line of input) {
    if (line === "Purchase") {
      break;
    }
    let pattern = />>(?<type>[A-Za-z\s]+)<<(?<price>\d+(.\d+)?)!(?<qty>\d+)/g;

    let result = pattern.exec(line);
    if (result !== null) {
      totalSum += Number(result.groups.price) * Number(result.groups.qty);
      console.log(result.groups.type);
    }
  }
  console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}

funrniture([
  ">>Laptop<<312.2323!3",
  ">>TV<<300.21314!5",
  ">Invalid<<!5",
  ">>TV<<300.21314!20",
  ">>Invalid<!5",
  ">>TV<<30.21314!5",
  ">>Invalid<<!!5",
  "Purchase",
]);
