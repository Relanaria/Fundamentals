function solve(input) {
  let numberOfHeroes = Number(input.shift());
  let heroes = {};

  for (let i = 0; i < numberOfHeroes; i++) {
    let currentHero = input.shift();
    let [name, hp, mana] = currentHero.split(" ");

    heroes[name] = {};
    heroes[name].hp = Number(hp);
    heroes[name].mana = Number(mana);
  }

  for (const token of input) {
    if (token.includes("CastSpell")) {
      let [castSpell_, hero, mpNeeded, spell] = token.split(" - ");

      if (heroes[hero].mana >= mpNeeded) {
        heroes[hero].mana -= Number(mpNeeded);
        console.log(
          `${hero} has successfully cast ${spell} and now has ${heroes[hero].mana} MP!`
        );
      } else {
        console.log(`${hero} does not have enough MP to cast ${spell}!`);
      }
    } else if (token.includes("TakeDamage")) {
      let [TakeDamage_, hero, damage, attacker] = token.split(" - ");
      heroes[hero].hp -= Number(damage);

      if (heroes[hero].hp > 0) {
        console.log(
          `${hero} was hit for ${damage} HP by ${attacker} and now has ${heroes[hero].hp} HP left!`
        );
      } else {
        console.log(`${hero} has been killed by ${attacker}!`);
        delete heroes[hero];
      }
    } else if (token.includes("Recharge")) {
      let [recharge_, hero, amount] = token.split(" - ");
      let curent = heroes[hero].mana;
      heroes[hero].mana += Number(amount);

      if (heroes[hero].mana > 200) {
        console.log(`${hero} recharged for ${200 - curent} MP!`);
        heroes[hero].mana = 200;
      } else {
        console.log(`${hero} recharged for ${amount} MP!`);
       
      }
    } else if (token.includes("Heal")) {
      let [heal_, hero, amount] = token.split(" - ");
      let curent = heroes[hero].hp;
      heroes[hero].hp += Number(amount);

      if (heroes[hero].hp> 100) {
        console.log(`${hero} healed for ${100 - curent} HP!`);
        heroes[hero].hp = 100;
      } else {
        console.log(`${hero} healed for ${amount} HP!`);
      }
    }
  }

  for (const hero of Object.entries(heroes)) {
    console.log(hero[0]);
    console.log(`HP: ${heroes[hero[0]].hp}`);
    console.log(`MP: ${heroes[hero[0]].mana}`);
  }
}

// solve([
//   "2",
//   "Solmyr 85 120",
//   "Kyrre 99 50",
//   "Heal - Solmyr - 10",
//   "Recharge - Solmyr - 50",
//   "TakeDamage - Kyrre - 66 - Orc",
//   "CastSpell - Kyrre - 15 - ViewEarth",
//   "End",
// ]);

solve([
  "4",
  "Adela 90 150",
  "SirMullich 70 40",
  "Ivor 1 111",
  "Tyris 94 61",
  "Heal - SirMullich - 50",
  "Recharge - Adela - 100",
  "CastSpell - Tyris - 1000 - Fireball",
  "TakeDamage - Tyris - 99 - Fireball",
  "TakeDamage - Ivor - 3 - Mosquito",
  "End",
]);
