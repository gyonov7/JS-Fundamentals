function race(input) {
  let regex = /(?<name>[A-Z]+)/gi;
  let racers = {};
  let names = input.shift().split(", ");
  for (let name of names) {
    racers[name] = 0;
  }
  for (let line of input) {
    if (line !== "end of race") {
      let racerName = line.match(/(?<name>[A-Z]+)/gi).join("");
      if (racers.hasOwnProperty(racerName)) {
        let currTotal = 0;
        let racerPoints = line.match(/[0-9]/g).map(Number);
        for (let num of racerPoints) {
          currTotal += num;
        }
        racers[racerName]+=currTotal;
      }
    }
  }
  let sorted = Object.entries(racers).sort((a,b)=>b[1]-a[1]);

  console.log(`1st place: ${sorted[0][0]}`);
  console.log(`2nd place: ${sorted[1][0]}`);
  console.log(`3rd place: ${sorted[2][0]}`);
}

race([
  "George, Peter, Bill, Tom",
  "G4e@55or%6g6!68e!!@ ",
  "R1@!3a$y4456@",
  "B5@i@#123ll",
  "G@e54o$r6ge#",
  "7P%et^#e5346r",
  "T$o553m&6",
  "end of race",
]);
