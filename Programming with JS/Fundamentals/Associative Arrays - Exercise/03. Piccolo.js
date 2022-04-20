function piccolo(input) {
  let result = new Set();

  for (let tokens of input) {
    let tuples = tokens.split(", ");
    if (tuples[0] == "IN") {
      result.add(tuples[1]);
    } else {
      result.delete(tuples[1]);
    }
  }
  
  if(result.size==0){
      console.log('Parking Lot is Empty');
  }else{
      let sorted = Array.from(result).sort((a,b)=>a.localeCompare(b));
      for(let curr of sorted){
          console.log(curr);
      }
  }
}

piccolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
console.log("---");
piccolo(["IN, CA2844AA", "IN, CA1234TA", "OUT, CA2844AA", "OUT, CA1234TA"]);
