function train(input) {
  let wagons = input.shift().split(" ").map(Number);
  let maxCapacity = Number(input.shift());

  while (input.length > 0) {
    let tokens = input.shift().split(' ');
    if(tokens[0]==='Add'){
        wagons.push(tokens[1]);
    }else{

        for (let index = 0; index < wagons.length; index++) {
            if(wagons[index] + Number(tokens[0]) <= maxCapacity){
            wagons[index] = wagons[index] + Number(tokens[0]);
            break;
            }
            
        }
    }
  }
  console.log(wagons.join(' '));
}

train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
