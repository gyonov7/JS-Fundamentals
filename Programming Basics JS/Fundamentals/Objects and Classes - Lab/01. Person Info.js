function personInfo(firstName, lastName, age) {
  let object = {
    firstName: firstName,
    lastName: lastName,
    age: age,
  };

  let firstKey = object.firstName;
  let secondKey = object.lastName;
  let thirdKey = object.age;
  object.town = "Plovdiv"
  console.log(firstKey);
  console.log(secondKey);
  console.log(thirdKey);
  console.log(object.town);
}

personInfo("Peter", "Pan", "20");
