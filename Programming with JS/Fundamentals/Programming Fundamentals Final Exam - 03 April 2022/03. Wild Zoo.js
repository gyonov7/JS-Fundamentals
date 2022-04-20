function wildZoo(input) {
  let line = input.shift();
  let myAnimals = {};
  let countArea = {};
  while (line != "EndDay") {
    let currLine = line.split(": ").shift();
    let animalInfo = line.split(": ").pop().split("-");
    let name = animalInfo[0];
    let food = Number(animalInfo[1]);
    let area = animalInfo[2];
    if (currLine == "Add") {
      if (myAnimals.hasOwnProperty(name) == false) {
        myAnimals[name] = {
          food,
          area,
        };
        if(countArea.hasOwnProperty(area)==false){
            countArea[area]=1;
        }else{
            countArea[area]+=1;
        }
      } else {
        myAnimals[name].food += food;
      }
     
    } else if (currLine == "Feed") {
      if (myAnimals.hasOwnProperty(name)) {
        myAnimals[name].food -= food;

        if (myAnimals[name].food <= 0) {
          console.log(`${name} was successfully fed`);
          countArea[myAnimals[name].area]-=1;
          delete myAnimals[name];
        }
      }
    }

    line = input.shift();
  }
  console.log("Animals:");
  for (let [name, info] of Object.entries(myAnimals)) {
    console.log(` ${name} -> ${info.food}g`);
  }

  console.log("Areas with hungry animals:");
  for (let [area,value] of Object.entries(countArea)) {
      if(!value<=0){
      console.log(`${area}: ${value}`);
      }
  }

  
}

wildZoo(["Add: Jamie-600-WaterfallArea",
"Add: Maya-6570-WaterfallArea",
"Add: Adam-4500-ByTheCreek",
"Add: Bobbie-6570-WaterfallArea",
"Feed: Jamie-2000",
"Feed: Adam-2000",
"Feed: Adam-2500",
"EndDay"])

;
