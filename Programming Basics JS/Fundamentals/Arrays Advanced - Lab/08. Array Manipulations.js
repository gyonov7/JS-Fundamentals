function manupulating(input) {
  let array = input.shift().split(' ');

  for (let index = 0; index < input.length; index++) {
      let command = input[index].split(' ');
      for (let index = 0; index < command.length; index++) {
          switch (command[0]){
              case 'Add':
            array.push(command[1])
              break;
              case 'Remove':
array = array.filter(x=> x!==command[1])
              break;
              case 'RemoveAt':
array.splice(command[1],1)
              break;
              case 'Insert':
array.splice(command[2],0,command[1])
              break;
              
          }
          break;
      }
      
      
  }

console.log(array.join(' '));
}
//manupulating(["4 19 2 53 6 43", "Add 3", "Remove 2", "RemoveAt 1", "Insert 8 3",]);
 manupulating([
  "6 12 2 65 6 42",
  "Add 8",
  "Remove 12",
  "RemoveAt 3",
  "Insert 6 2",
]);
