function muOnline(string) {
  let health = 100;
  let bitCoins = 0;
  let roomCount = 0;
  let aliveCheck = true;

  let arrOfActions = string.split("|");

  //['rat 10', 'bat 20', 'potion 10', 'rat 10', 'chest 100', 'boss 70', 'chest 1000']

  for (const element of arrOfActions) {
    let [command, number] = element.split(" ");
    if(!aliveCheck){
        break;
    }
    roomCount++;

    switch (command) {
      case "potion":
        let amountHealed =
          health + Number(number) <= 100 ? Number(number) : 100 - health;
        health += amountHealed;
        if (health > 100) {
          health = 100;
        }
        console.log(`You healed for ${amountHealed} hp.`);
        console.log(`Current health: ${health} hp.`);
        break;
      case "chest":
        bitCoins += Number(number);
        console.log(`You found ${number} bitcoins.`);
        break;

      default:
        health -= Number(number);
        if (health > 0) {
          console.log(`You slayed ${command}.`);
        } else {
          console.log(`You died! Killed by ${command}.`);
          console.log(`Best room: ${roomCount}`);
          aliveCheck = false;
        }
        break;
    }
  }

  if(aliveCheck){
    console.log("You've made it!" );
    console.log(`Bitcoins: ${bitCoins}`);
    console.log(`Health: ${health}`);
  }
}

muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110" );
