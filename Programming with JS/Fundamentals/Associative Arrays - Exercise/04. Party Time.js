function party(input) {
  let vipGuest = {};
  let standardGuests = {};
  while (input[0]!='PARTY') {
     let command = input.shift();
      if (Number.isNaN(Number(command[0]))) {
        standardGuests[command] = 1;
      } else {
        vipGuest[command] = 1;
      }
  }
  input.shift();

for(let comes of input){
    delete vipGuest[comes];
    delete standardGuests[comes];
}
let counter =0;
let resultArr=[];
for(let n in vipGuest){
counter++;
resultArr.push(n);

}
for(let n in standardGuests){
    counter++;
resultArr.push(n);
    }

console.log(counter);
console.log(resultArr.join('\n'));
}

party([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);
