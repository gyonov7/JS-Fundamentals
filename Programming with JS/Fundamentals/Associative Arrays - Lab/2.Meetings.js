function meetings(input) {
  let result = new Map();

  for (let line of input) {
    let [day, name] = line.split(" ");

    if (result.has(day) == false) {
      console.log(`Scheduled for ${day}`);
      result.set(day,name)
    } else {
      console.log(`Conflict on ${day}!`);
    }
  }

  for (let [day, name] of result) {
    console.log(day, "->", name);
  }
}

meetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
console.log("------");
meetings([
  "Friday Bob",
  "Saturday Ted",
  "Monday Bill",
  "Monday John",
  "Wednesday George",
]);
