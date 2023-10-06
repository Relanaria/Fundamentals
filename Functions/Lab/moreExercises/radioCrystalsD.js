function radionMonitoring(arr) {
  const desiredThickness = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let currentThickness = arr[i];
    let operationCut = 0;
    let operationLap = 0;
    let operationGrind = 0;
    let operationEtch = 0;
    let operationXray = 0;

    console.log(`Processing chunk ${currentThickness} microns`);

    while (currentThickness !== desiredThickness) {
      if (currentThickness / 4 >= desiredThickness) {
        currentThickness /= 4;
        operationCut++;
        currentThickness = Math.floor(currentThickness);
      } else if (currentThickness * 0.8 >= desiredThickness) {
        currentThickness *= 0.8;
        operationLap++;
        currentThickness = Math.floor(currentThickness);
      } else if (currentThickness - 20 >= desiredThickness) {
        currentThickness -= 20;
        operationGrind++;
        currentThickness = Math.floor(currentThickness);// moje bi tuk e problema?
      } else if (currentThickness - 2 >= desiredThickness) {
        currentThickness -= 2;
        operationEtch++;
        currentThickness = Math.floor(currentThickness);
      }
      if (currentThickness < desiredThickness) {
        currentThickness += 1;
        operationXray++;
      }
    }

    if (operationCut > 0) {
      console.log(`Cut x${operationCut}`);
      console.log("Transporting and washing");
    }
    if (operationLap > 0) {
      console.log(`Lap x${operationLap}`);
      console.log("Transporting and washing");
    }
    if (operationGrind > 0) {
      console.log(`Grind x${operationGrind}`);
      console.log("Transporting and washing");
    }
    if (operationEtch > 0) {
      console.log(`Etch x${operationEtch}`);
      console.log("Transporting and washing");
    }
    if (operationXray > 0) {
      console.log(`X-ray x1`);
    }

    console.log(`Finished crystal ${desiredThickness} microns`);
  }
}

// radionMonitoring([1000, 4000, 8100]);
radionMonitoring([1375, 50000]);
