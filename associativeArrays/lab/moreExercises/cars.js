function cars(arr) {
  let garage = {};

  for (const token of arr) {
    let number = token.split(" - ");

    if (Number(number[0]) in garage) {
      garage[number[0]] += " > " + number[1];
    } else {
      garage[number[0]] = number[1];
    }
  }

  for (const [gar, models] of Object.entries(garage)) {
    let cars = models.split(" > ");
    console.log(`Garage № ${gar}`);
    for (const model of cars) {
       let str = model;
 
        str = str.replaceAll(": ", " - ");
     
      console.log(`--- ${str}`);
    }
  }
}

cars([
  "1 - color: green, fuel type: petrol",
  "1 - color: dark red, manufacture: WV",
  "2 - fuel type: diesel",
  "3 - color: dark blue, fuel type: petrol",
]);
