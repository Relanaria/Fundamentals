function shopingListProblem(arr) {
  let shoppingList = arr.shift().split("!");
  let index = 0;

  for (const command of arr) {
    let [toDo, item1, item2] = command.split(" ");
    if (toDo === "Go Shopping!") {
      break;
    }

    switch (toDo) {
      case "Urgent":
        if (!shoppingList.includes(item1)) {
          shoppingList.unshift(item1);
        }
        break;

      case "Unnecessary":
        if (shoppingList.includes(item1)) {
          index = shoppingList.indexOf(item1);
          shoppingList.splice(index, 1);
        //   if (groceries.includes(item)) {
        //     groceries = groceries.filter((grocery) => grocery !== item);
        // }
        }

        break;

      case "Correct":
        if (shoppingList.includes(item1)) {
          index = shoppingList.indexOf(item1);
          shoppingList.splice(index, 1, item2);
        //   if (groceries.includes(item)) {
        //     let index = groceries.indexOf(item);
        //     groceries[index] = newItem;
        // }
        }
        break;

      case "Rearrange":
        if (shoppingList.includes(item1)) {
          index = shoppingList.indexOf(item1);
          let temp = shoppingList.splice(index, 1);
          shoppingList.push(temp);
        }
        break;
    }
  }

  console.log(shoppingList.join(", "));
}

shopingListProblem(["Milk!Pepper!Salt!Water!Banana", 

"Urgent Salt", 

"Unnecessary Grapes", 

"Correct Pepper Onion", 

"Rearrange Grapes", 

"Correct Tomatoes Potatoes", 

"Go Shopping!"]) 
