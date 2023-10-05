function dungeonDarkest(arr) {
  let roomsInfo = arr[0];
  let rooms = roomsInfo.split("|");
  let health = 100;
  let coins = 0;
  let roomCount = 0;
  let aliveCheck = true;

  for (let i = 0; i < rooms.length; i++) {
    let currentRoomAction = rooms[i].split(" ");
    roomCount++;

    for (let j = 0; j < currentRoomAction.length - 1; j++) {
      let currentRoomType = currentRoomAction[j];

      if (currentRoomType === "potion") {
        let amountHealed =  health + Number(currentRoomAction[j + 1]) <= 100?  Number(currentRoomAction[j + 1]) : 100 - health;
        health += amountHealed;
        if (health > 100) {
          health = 100;
        }
        console.log(`You healed for ${amountHealed} hp.`);
        console.log(`Current health: ${health} hp.`);
      }

      if(currentRoomType === "chest"){
        coins += Number(currentRoomAction[j+1])
        console.log( `You found ${currentRoomAction[j+1]} coins.`);
      }

      if(currentRoomType !== "chest" && currentRoomType !== "potion"){
        health -= Number(currentRoomAction[j + 1]);
        if(health > 0){
            console.log(`You slayed ${currentRoomAction[j]}.`);
        }else{
            console.log(`You died! Killed by ${currentRoomAction[j]}.`);
            console.log(`Best room: ${roomCount}`);
            aliveCheck = false;

        }
      }
    }
    if(!aliveCheck){
        break;
    }
  }

  if(aliveCheck){
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
  }
}

// dungeonDarkest(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
dungeonDarkest(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])
