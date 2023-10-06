function carWash(arr) {
  let percetageOfCarCleaned = 0;

  for (let i = 0; i < arr.length; i++) {
    let elementCommand = arr[i];

    switch (elementCommand) {
      case "soap":
        percetageOfCarCleaned += 10;
        break;

      case "water":
        percetageOfCarCleaned += percetageOfCarCleaned * 0.2;
        break;
      case "vacuum cleaner":
        percetageOfCarCleaned += percetageOfCarCleaned * 0.25;
        break;
      case "mud":
        percetageOfCarCleaned -= percetageOfCarCleaned * 0.1;
        break;
    }
  }

  console.log(`The car is ${percetageOfCarCleaned.toFixed(2)}% clean.`);
}

carWash(["soap", "soap", "vacuum cleaner", "mud", "soap", "water"]);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);
