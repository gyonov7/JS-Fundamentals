function company(input) {
  let result = {};

  for (let line of input) {
    let [comp, user] = line.split(" -> ");

    if (result.hasOwnProperty(comp) == false) {
      result[comp] = new Set();
    }

    result[comp].add(user);
  }
  let sorted = Array.from(Object.entries(result)).sort((a,b)=>a[0].localeCompare(b[0]));

  for(let [name, user] of sorted){
      user = Array.from(user);
      console.log(name);
      for(let id of user){
          console.log('--',id);
      }
  }
}

company([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);
