function warShips(arr) {
  let pirateShip = arr.shift().split(">").map(Number);
  let warShip = arr.shift().split(">").map(Number);
  let maxHealth = Number(arr.shift());

  for (const element of arr) {
    if (element === "Retire") {
      console.log(
        `Pirate ship status: ${pirateShip.reduce(
          (accumulator, currentValue) => accumulator + currentValue,
          0
        )}`
      );
      console.log(
        `Warship status: ${warShip.reduce(
          (accumulator, currentValue) => accumulator + currentValue,
          0
        )}`
      );

      return;
    }

    let arr1 = element.split(" ");
    let command = arr1.shift();
    let [index1, index2, damage] = arr1.map(Number);

    switch (command) {
      case "Fire":
        if (warShip.hasOwnProperty(index1)) {
          warShip[index1] = warShip[index1] - index2;

          if (warShip[index1] <= 0) {
            console.log("You won! The enemy ship has sunken.");
            return;
          }
        }

        break;

      case "Defend":
        if (index1 >= 0 && index2 <= pirateShip.length) {
          for (let i = index1; i <= index2; i++) {
            pirateShip[i] = pirateShip[i] - damage;
            if (pirateShip[i] <= 0) {
              console.log("You lost! The pirate ship has sunken.");
              return;
            }
          }
        }

        break;
      case "Repair":
        if (pirateShip.hasOwnProperty(index1)) {
          pirateShip[index1] + index2 > maxHealth
            ? (pirateShip[index1] = maxHealth)
            : (pirateShip[index1] = pirateShip[index1] + index2);
        }
        break;
      case "Status":
        let maxHealthCapacity = maxHealth * 0.2;

        let sectionThatNeedRepair = pirateShip.filter(
          (x) => x < maxHealthCapacity
        );
        console.log(`${sectionThatNeedRepair.length} sections need repair.`);

        break;
    }
  }

  console.log(pirateShip);
}

warShips(["2>3>4>5>2", 

"6>7>8>9>10>11", 

"20", 

"Status", 

"Fire 2 3", 

"Defend 0 4 11", 

"Repair 3 18", 

"Retire"]) ;
