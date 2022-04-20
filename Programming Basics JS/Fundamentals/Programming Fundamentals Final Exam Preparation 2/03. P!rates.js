function pirates(input) {
  let line = input.shift();
  let targets = {};
  let count = 0;
  while (line != "Sail") {
    let [city, population, gold] = line.split("||");
    population = Number(population);
    gold = Number(gold);
    if (targets.hasOwnProperty(city) == false) {
      count++;
      targets[city] = {
        population,
        gold,
      };
    } else {
      targets[city].population += population;
      targets[city].gold += gold;
    }
    line = input.shift();
  }
  let commamd = input.shift();
  while (commamd != "End") {
    let attackInfo = commamd.split("=>");
    let action = attackInfo.shift();
    let attackedCity = attackInfo.shift();
    let killed = Number(attackInfo.shift());
    let stolen = Number(attackInfo.shift());

    if (action == "Plunder") {
      targets[attackedCity].population -= killed;
      targets[attackedCity].gold -= stolen;
      console.log(
        `${attackedCity} plundered! ${stolen} gold stolen, ${killed} citizens killed.`
      );
      if (
        targets[attackedCity].population <= 0 ||
        targets[attackedCity].gold <= 0
      ) {
        console.log(`${attackedCity} has been wiped off the map!`);
        delete targets[attackedCity];
        count--;
      }
    } else if (action === "Prosper") {
      if (killed < 0) {
        console.log(`Gold added cannot be a negative number!`);
      } else {
        targets[attackedCity].gold += killed;
        console.log(
          `${killed} gold added to the city treasury. ${attackedCity} now has ${targets[attackedCity].gold} gold.`
        );
      }
    }

    commamd = input.shift();
  }
  if (count > 0) {
    console.log(
      `Ahoy, Captain! There are ${count} wealthy settlements to go to:`
    );
    for (let [key, value] of Object.entries(targets)) {
      //console.log(key, value.population,value.gold);
      console.log(
        `${key} -> Population: ${value.population} citizens, Gold: ${value.gold} kg`
      );
    }
  } else {
    console.log(
      `Ahoy, Captain! All targets have been plundered and destroyed!`
    );
  }
}

pirates([
  "Nassau||95000||1000",
  "San Juan||930000||1250",
  "Campeche||270000||690",
  "Port Royal||320000||1000",
  "Port Royal||100000||2000",
  "Sail",
  "Prosper=>Port Royal=>-200",
  "Plunder=>Nassau=>94000=>750",
  "Plunder=>Nassau=>1000=>150",
  "Plunder=>San Juan=>150000=>631590",
  "Plunder=>Campeche=>150000=>66990",
  "Plunder=>Port Royal=>150000=>690645",
  "End",
]);
