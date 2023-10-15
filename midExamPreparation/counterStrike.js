function cs(arr) {
  let intialEnergy = Number(arr.shift());
  let battlesWon = 0;

  for (const distance of arr) {
    if (distance === "End of battle") {
      console.log(`Won battles: ${battlesWon}. Energy left: ${intialEnergy}`);
      break;
    } else {
      Number(distance);
    }

    if (intialEnergy >= distance) {
      intialEnergy -= distance;
      battlesWon++;
      if (battlesWon % 3 === 0) {
        intialEnergy += battlesWon;
      }
    } else {
      console.log(
        `Not enough energy! Game ends with ${battlesWon} won battles and ${intialEnergy} energy`
      );
      break;
    }
  }
}

cs(["200", "54", "14", "28", "13", "End of battle"]);
