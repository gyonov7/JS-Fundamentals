function hcl(input) {
  let num = input.shift();
  let heroes = {};

  for (let i = 0; i < num; i++) {
    let [name, hp, mp] = input.shift().split(" ");
    hp = Number(hp);
    mp = Number(mp);
    heroes[name] = {
      hp,
      mp,
    };
  }

  while (input[0] != "End") {
    let [command, name, amount, attacker] = input.shift().split(" - ");
    if (heroes.hasOwnProperty(name)) {
      if (command == "Heal") {
        if (heroes[name].hp + Number(amount) > 100) {
          console.log(`${name} healed for ${100 - heroes[name].hp} HP!`);
          heroes[name].hp = 100;
        } else {
          heroes[name].hp += Number(amount);
          console.log(`${name} healed for ${amount} HP!`);
        }
      } else if (command == "Recharge") {
        if (heroes[name].mp + Number(amount) > 200) {
          console.log(`${name} recharged for ${200 - heroes[name].mp} MP!`);
          heroes[name].mp = 200;
        } else {
          heroes[name].mp += Number(amount);
          console.log(`${name} recharged for ${amount} MP!`);
        }
      } else if (command == "TakeDamage") {
        if (heroes[name].hp - Number(amount) > 0) {
          heroes[name].hp -= Number(amount);
          console.log(
            `${name} was hit for ${amount} HP by ${attacker} and now has ${heroes[name].hp} HP left!`
          );
        } else {
          console.log(`${name} has been killed by ${attacker}!`);
          delete heroes[name];
        }
      } else if (command == "CastSpell") {
        if (heroes[name].mp - Number(amount) >= 0) {
          heroes[name].mp -= Number(amount);
          console.log(
            `${name} has successfully cast ${attacker} and now has ${heroes[name].mp} MP!`
          );
        } else {
          console.log(`${name} does not have enough MP to cast ${attacker}!`);
        }
      }
    }
  }

  for (let line of Object.entries(heroes)) {
    console.log(line[0]);
    console.log(`  HP: ${line[1].hp}`), console.log(`  MP: ${line[1].mp}`);
  }
}

hcl([
  2,
  "Solmyr 85 120",
  "Kyrre 99 50",
  "Heal - Solmyr - 20",
  "Recharge - Solmyr - 100",
  "TakeDamage - Kyrre - 98 - Orc",  
  "TakeDamage - Solmyr - 101 - Orc",
  "CastSpell - Kyrre - 55 - ViewEarth",
  "Heal - Solmyr - 101 - Orc",
  "TakeDamage - Solmyr - 101 - Orc",
  "End",
]);
