function dictionary(input) {
  let resultObj = {};
  let myDictionary = [];

  for (let line of input) {
    let currLine = JSON.parse(line);
    for (let key in currLine) {
      if (resultObj.hasOwnProperty(key)) {
        resultObj[key] = currLine[key];
      } else {
        resultObj[key] = currLine[key];
      }
    }
  }
  let entries = Object.entries(resultObj);

  let sorted = entries.sort(([keyA, valueA], [keyB, valueB]) =>
    keyA.localeCompare(keyB)
  );

  for (let line of sorted) {
    console.log(`Term: ${line[0]} => Definition: ${line[1]}`);
  }
}

dictionary([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Coffee":"changed"}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Boiler":"changed"}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);
