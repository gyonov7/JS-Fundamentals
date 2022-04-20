function convertToJson(firstName, lastName, hairColor) {
  let myObj = {
    name: firstName,
     lastName: lastName,
   hairColor: hairColor,
  };

  let result = JSON.stringify(myObj);
  console.log(result);
}

convertToJson("George", "Jones", "Brown");
