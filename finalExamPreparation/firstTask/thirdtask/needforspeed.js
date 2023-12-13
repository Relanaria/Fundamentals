function solve(input) {
  let numberOfCars = Number(input.shift());
  let cars = {};

  for (let i = 0; i < numberOfCars; i++) {
    let [carModel, mileAge, fuelAveilable] = input.shift().split("|");

    cars[carModel] = {};
    cars[carModel].mileAge = Number(mileAge);
    cars[carModel].fuelAveilable = Number(fuelAveilable);
  }

  for (const token of input) {
    if (token.includes("Drive")) {
      let [drive_, car, distance, fuel] = token.split(" : ");

      if (cars[car].fuelAveilable >= fuel) {
        console.log(
          `${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`
        );
        cars[car].mileAge += Number(distance);
        cars[car].fuelAveilable -= Number(fuel);
      } else {
        console.log("Not enough fuel to make that ride");
      }

      if (cars[car].mileAge >= 100000) {
        console.log(`Time to sell the ${car}!`);
        delete cars[car];
      }
    } else if (token.includes("Refuel")) {
      let [refil_, car, fuel] = token.split(" : ");
      let current = cars[car].fuelAveilable;
      cars[car].fuelAveilable += Number(fuel);

      if (cars[car].fuelAveilable > 75) {
        console.log(`${car} refueled with ${75 - current} liters`);
        cars[car].fuelAveilable = 75;
      } else {
        console.log(`${car} refueled with ${fuel} liters`);
      }
    } else if (token.includes("Revert")) {
      let [revert_, car, kilometers] = token.split(" : ");

      cars[car].mileAge -= Number(kilometers);

      if (cars[car].mileAge < 10000) {
        cars[car].mileAge = 10000;
      } else {
        console.log(`${car} mileage decreased by ${kilometers} kilometers`);
      }
    }
  }

  for (const [car, obj] of Object.entries(cars)) {
    console.log(
      `${car} -> Mileage: ${cars[car].mileAge} kms, Fuel in the tank: ${cars[car].fuelAveilable} lt.`
    );
  }
}

solve([
  "4",

  "Lamborghini Veneno|11111|74",

  "Bugatti Veyron|12345|67",

  "Koenigsegg CCXR|67890|12",

  "Aston Martin Valkryie|99900|50",

  "Drive : Koenigsegg CCXR : 382 : 82",

  "Drive : Aston Martin Valkryie : 99 : 23",

  "Drive : Aston Martin Valkryie : 2 : 1",

  "Refuel : Lamborghini Veneno : 40",

  "Revert : Bugatti Veyron : 2000",

  "Stop",
]);
