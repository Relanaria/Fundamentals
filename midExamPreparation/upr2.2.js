function treasureHunt(arr) {
  let loot = arr.shift().split("|");

  for (const element of arr) {
    let storage = element.split(" ");
    let command = storage.shift().toLowerCase();

    if (command === "yohoho!") {
      break;
    }

    switch (command) {
      case "loot":
        addLoot(loot, storage);
        break;
      case "drop":
        dropLoot(loot, storage);
        break;
      case "steal":
        let numberOfItemsRemoved = Number(storage[0]);
        let removedItems = stealLoot(loot, numberOfItemsRemoved);

        if (removedItems.length > 0) {
          console.log(removedItems.join(", "));
        } else {
          console.log("Some items couldn't be stolen.");
        }
        break;
    }
  }

  if (loot.length > 0) {
    let averageGainValue = calculateAverageGain(loot);
    console.log(
      `Average treasure gain: ${averageGainValue.toFixed(2)} pirate credits.`
    );
  } else {
    console.log("Failed treasure hunt.");
  }

  function addLoot(array, items) {
    for (const item of items) {
      if (!array.includes(item)) {
        array.unshift(item);
      }
    }
  }

  function dropLoot(array, index) {
    if (index >= 0 && index < array.length) {
      let removedItem = array.splice(index, 1);
      array.push(removedItem[0]);
    }
  }

  function calculateAverageGain(array) {
    let elementsLength = array.map((item) => item.length);
    let totalLength = elementsLength.reduce((acc, curr) => acc + curr, 0);
    return totalLength / elementsLength.length;
  }

  function stealLoot(array, count) {
    if (count >= array.length) {
      let removedItems = array.splice(0);
      return removedItems;
    } else {
      let removedItems = array.splice(-count);
      return removedItems;
    }
  }
}

treasureHunt([
  "Diamonds|Silver|Shotgun|Gold",

  "Loot Silver Medals Coal",

  "Drop -1",

  "Drop 1",

  "Steal 6",

  "Yohoho!",
]);
