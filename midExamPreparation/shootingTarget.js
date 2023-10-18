function shootingTarget(arr) {
  let target = arr.shift().split(" ").map(Number);
  let startingIndex = 0;
  let endIndex = 0;

  for (const command of arr) {
    let splitString = command.split(" ");
    let toDo = splitString.shift();
    let [index, powerValue] = splitString.map(Number);

    if (toDo === "End") {
      console.log(target.join("|"));
      return;
    }

    switch (toDo) {
      case "Shoot":
        if (target.hasOwnProperty(index)) {
          target[index] = target[index] - powerValue;
        }

        if (target[index] <= 0) {
          target.splice(index, 1);
        }

        break;

      case "Add":
        if (target.hasOwnProperty(index)) {
          target.splice(index, 0, powerValue);
        } else {
          console.log("Invalid placement!");
        }

        break;

      case "Strike":
        if (target.hasOwnProperty(index)) {
          const radiusRange = 1 + (powerValue * 2);
          startingIndex = index - powerValue;
          let rigthIndex = index + powerValue;

          if (startingIndex >= 0 && rigthIndex < target.length) {
            target.splice(startingIndex, radiusRange);
          } else {
            console.log("Strike missed!");
          }
        }
        break;
    }
  }
}

shootingTarget([
  "52 74 23 44 96 110",

  "Shoot 5 10",

  "Shoot 1 80",

  "Strike 2 1",

  "Add 22 3",

  "End",
]);

// shootingTarget(["1 2 3 4 5",

// "Strike 0 1",

// "End"])
