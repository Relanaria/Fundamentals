function listOfProducts(arr) {
  let sortedList = arr.sort();

  for (let i = 0; i < sortedList.length; i++) {
    console.log(`${i + 1}.${sortedList[i]}`);
  }
}

listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);
listOfProducts(["Watermelon", "Banana", "Apples"]);
