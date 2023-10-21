function craft(array) {
  let inventory = array
    .shift()
    .split(",")
    .map((item) => item.trimStart());
  let index = 0;

  for (const element of array) {
    let [command, material] = element.split(" - ").map((item) => item.trim());

    if (command === "Craft!") {
      console.log(inventory.join(", "));
      return;
    }

    switch (command) {
      case "Collect":
        if (!inventory.includes(material)) {
          inventory.push(material);
        }
        break;
      case "Drop":
        if (inventory.includes(material)) {
          index = inventory.indexOf(material);
          inventory.splice(index, 1);
        }
        break;
      case "Combine Items":
        let [old, newItem] = material.split(":");
        if (inventory.includes(old)) {
          index = inventory.indexOf(old) + 1;
          inventory.splice(index, 0, newItem);
        }
        break;
      case "Renew":
        if (inventory.includes(material)) {
          index = inventory.indexOf(material);
          let temp = inventory.splice(index, 1);
          inventory.push(temp);
        }
        break;
    }
  }
}

craft([
  "Iron, Sword",

  "Drop - Bronze",

  "Combine Items - Sword:Bow",

  "Renew - Iron",

  "Craft!",
]);
// "Collect - Gold",
//   "Drop - Wood",
