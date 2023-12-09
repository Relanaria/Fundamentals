function solve(input) {
  let currentPlants = Number(input.shift());
  let plants = {};
  let pattern = /\w+/gm;

  for (let i = 0; i < currentPlants; i++) {
    let [name, rarity] = input.shift().split("<->");

    plants[name] = {};
    plants[name].rarity = rarity;
    plants[name].rating = 0;
    plants[name].ratingCount = 0;
  }

  for (const token of input) {
    if (token.includes("Rate")) {
      let match = token.match(pattern);

      if (plants.hasOwnProperty(match[1])) {
        plants[match[1]].rating += Number(match[2]);
        plants[match[1]].ratingCount++;
      } else {
        console.log("error");
      }
    } else if (token.includes("Update")) {
      let match = token.match(pattern);
      if (plants.hasOwnProperty(match[1])) {
        plants[match[1]].rarity = match[2];
      } else {
        console.log("error");
      }
    } else if (token.includes("Reset")) {
      let match = token.match(pattern);
      if (plants.hasOwnProperty(match[1])) {
        plants[match[1]].rating = 0;
        plants[match[1]].ratingCount = 0;
      } else {
        console.log("error");
      }
    }
  }

  console.log('Plants for the exhibition:');

  for (const [plant, ojb] of Object.entries(plants)) {
    console.log(
      `- ${plant}; Rarity: ${plants[plant].rarity}; Rating: ${
        plants[plant].rating > 0
          ? (plants[plant].rating / plants[plant].ratingCount).toFixed(2)
          : "0.00"
      }`
    );
  }
}

solve([
  "2",
  "Candelabra<->10",
  "Oahu<->10",
  "Rate: Oahu - 7",
  "Rate: Candelabra - 6",
  "Exhibition",
]);
