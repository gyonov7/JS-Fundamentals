function messageTranslator(input) {
  let n = Number(input.shift());

  // let pattern = /\!(?<command>[A-z]{3,})\!:\[(?<string>[A-z]{8,})\]/gm;
  let result = [];
  for (let i = 0; i < n; i++) {
    let pattern = /\!(?<command>[A-Z][a-z]{3,})\!:\[(?<string>[A-z]{8,})\]/gm;
    let text = input.shift();
    let match = pattern.exec(text);
    if (match == null) {
      console.log(`The message is invalid`);
    } else {
      while (match != null) {
        let myCommand = match.groups.command;
        let myString = match.groups.string;

        for (let word of myString) {
          result.push(word.charCodeAt());
        }

        console.log(`${myCommand}: ${result.join(" ")}`);

        match = pattern.exec(input);
      }
    }
  }
}

// messageTranslator(["2",
// "!Send!:[IvanisHere]",
// "*Time@:[Itis5amAlready"]);
console.log("---");
messageTranslator([
    '3',
    '!play!:[TheNewSong]',
    '!Ride!:[Bike]',
    '!Watch!:[LordofTheRings]'
]);
