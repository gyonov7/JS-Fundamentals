function secretChat(input) {
  let text = input.shift();

  let command = input[0];

  while (command != "Reveal") {
    let line = input.shift().split(":|:");
    command = line[0];
    let p1 = line[1];
    let p2 = line[2];

    if (command == "InsertSpace") {
      let left = text.substring(0, Number(p1));
      let right = text.substring(Number(p1));
      text = left + " " + right;
      console.log(text);
    } else if (command == "Reverse") {
      if (text.indexOf(p1) != -1) {
          let index = text.indexOf(p1);
        let left = text.slice(0,index);
        let right = text.slice(index + p1.length);
        text = left + right + p1.split('').reverse().join('');
        console.log(text);
      } else {
        console.log("error");
      }
    } else if (command == "ChangeAll") {
      text = text.split(p1).join(p2);
      console.log(text);
    }

    command = input[0];
  }
  console.log(`You have a new text message: ${text}`);
}

secretChat([
  "heVVodar!gniV",
  "ChangeAll:|:V:|:l",
  "Reverse:|:!gnil",
  "InsertSpace:|:5",
  "Reveal",
]);
console.log("---");
secretChat([
  "Hiware?uiy",
  "ChangeAll:|:i:|:o",
  "Reverse:|:?uoy",
  "Reverse:|:jd",
  "InsertSpace:|:3",
  "InsertSpace:|:7",
  "Reveal",
]);
