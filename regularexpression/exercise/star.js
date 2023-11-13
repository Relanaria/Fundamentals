function star(input) {
  let attackedCount = 0;
  let attackedPlanets = [];
  let destroyedCount = 0;
  let destroyedPlanets = [];
  let regex =
    /@(?<planetName>[A-Za-z]+)([^@\-:!>]*):[\d]+([^@\-:!>]*)!(?<attackType>[AD])!([^@\-:!>]*)\->[\d]+([^@\-:!>]*)/;

  for (const message of input) {
    let count = cound(message);
    let str = "";

    for (let i = 0; i < message.length; i++) {
      let char = message[i].charCodeAt(0) - count;
      str += String.fromCharCode(char);
    }
    let valid = regex.exec(str);
    if (valid !== null) {
      if (valid.groups["attackType"] === "A") {
        attackedCount++;
        attackedPlanets.push(valid.groups["planetName"]);
      } else {
        destroyedCount++;
        destroyedPlanets.push(valid.groups["planetName"]);
      }
    }
  }

  attackedPlanets.sort((a, b) => a.localeCompare(b));
  destroyedPlanets.sort((a, b) => a.localeCompare(b));

  console.log(`Attacked planets: ${attackedCount}`);
  attackedPlanets.forEach((planet) => console.log(`-> ${planet}`));
  console.log(`Destroyed planets: ${destroyedCount}`);
  destroyedPlanets.forEach((planet) => console.log(`-> ${planet}`));

  function cound(input) {
    const targetLetters = ["s", "t", "a", "r"];
    let count = 0;

    for (let i = 0; i < input.length; i++) {
      if (targetLetters.includes(input.charAt(i).toLowerCase())) {
        count++;
      }
    }

    return count;
  }
}

star([
  "3",
  "tt(''DGsvywgerx>6444444444%H%1B9444",
  "GQhrr|A977777(H(TTTT",
  "EHfsytsnhf?8555&I&2C9555SR",
]);

// count all the letters [s, t, a, r]
