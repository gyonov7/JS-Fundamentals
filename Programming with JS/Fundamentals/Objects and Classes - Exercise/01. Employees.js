function employee(arr) {
    let person ={};

    for (let index = 0; index < arr.length; index++) {
        let name = arr[index];
        person.name = name;
        person.number = Number(name.length);
        
        console.log(`Name: ${person.name} -- Personal Number: ${person.number}`);
    }
}

employee([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
