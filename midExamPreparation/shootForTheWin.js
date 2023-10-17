function shootForTheWin(arr) {
  let target = arr.shift().split(" ").map(Number);
  let value = 0;
  let targetShot = 0;

  for (const shot of arr) {
    if (shot === "End") {
      break;
    }
    let index = Number(shot);

    if (index < target.length) {
      if (target[index] !== -1) {
        targetShot++;
        value = target[index];
        target[index] = -1;
        for (let i = 0; i < target.length; i++) {
          if (target[i] !== -1) {
            if (target[i] <= value) {
              target[i] += value;
            } else {
              target[i] -= value;
            }
          }
        }
      }
    }
  }
  console.log(`Shot targets: ${targetShot} -> ${target.join(" ")}`);
}

shootForTheWin(["30 30 12 60 54 66", "5", "2", "4", "0", "End"]);
