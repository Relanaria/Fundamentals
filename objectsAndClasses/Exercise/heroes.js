function heroes(arr) {
  let listOfHeroes = [];

  class Hero {
    constructor(name, level, items) {
      this.name = name;
      this.level = Number(level);
      this.items = items;
    }
  }

  for (const hero of arr) {
    let [name, level, items] = hero.split(" / ");

    listOfHeroes.push(new Hero(name, level, items));
  }

  listOfHeroes.sort((a, b) => {
    return a.level - b.level;
  });

  listOfHeroes.forEach((element) => {
    console.log(`Hero: ${element.name}`);
    console.log(`level => ${element.level}`);
    console.log(`items => ${element.items}`);
  });
}

heroes([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
