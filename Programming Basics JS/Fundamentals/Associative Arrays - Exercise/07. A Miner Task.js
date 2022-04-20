function minerTask(input) {
  let result = new Map();

  for (let index = 0; index < input.length; index += 2) {
    let key = input[index];
    let value = Number(input[index + 1]);
    if (result.has(key) == false) {
      result.set(key, value);
    } else {
      let existing = Number(result.get(key));
      result.set(key, value + existing);
    }
  }
for(let [metal, value]of result){
    console.log(metal,'->',value);
}
}

//minerTask(["Gold", "155", "Silver", "10", "Copper", "17"]);
minerTask(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);
