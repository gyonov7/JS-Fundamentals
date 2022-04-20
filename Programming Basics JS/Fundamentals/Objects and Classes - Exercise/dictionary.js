function myDictionary (input){
let arr = [];
let currObj = {};
    for (let line of input) {
        //console.log(JSON.parse(line));
        let currLine = JSON.parse(line);
        arr.push(currLine);
        for (let key in currLine) {
          // console.log(key , currLine[key]);
           
           

        }
        
        
    }
    
    console.log(arr.sort());

}


myDictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Coffee":"changed"}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Boiler":"changed"}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);
  