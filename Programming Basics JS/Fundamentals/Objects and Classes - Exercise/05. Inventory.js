function inventory(input) {
let myInventory = [];

    for (let tokens of input) {
        let heroInfo = tokens.split(' / ');
        let heroName = heroInfo[0];
        let heroLevel = Number(heroInfo[1]);
        let heroItem = heroInfo[2];
        myInventory.push({heroName,heroLevel,heroItem});
       
    }

    for (let key in myInventory) {
        myInventory.sort((a,b)=> a.heroLevel-b.heroLevel);
        console.log(`Hero: ${myInventory[key].heroName}`);
        console.log(`level => ${myInventory[key].heroLevel}`);
        console.log(`items => ${myInventory[key].heroItem}`);

    }
    
}

inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
