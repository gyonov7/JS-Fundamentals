function addresss(input) {
  let result = new Map();

  for (let line of input) {
    let [name, address] = line.split(":");
    result.set(name,address)
  }

  let sorted = Array.from(result).sort((a, b) => a[0].localeCompare(b[0]));
  for (let [name, address] of sorted) {
    console.log(name, "->", address);
  }
}

addresss([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
console.log("-===--==");
addresss([
  "Bob:Huxley Rd",
  "John:Milwaukee Crossing",
  "Peter:Fordem Ave",
  "Bob:Redwing Ave",
  "George:Mesta Crossing",
  "Ted:Gateway Way",
  "Bill:Gateway Way",
  "John:Grover Rd",
  "Peter:Huxley Rd",
  "Jeff:Gateway Way",
  "Jeff:Huxley Rd",
]);
