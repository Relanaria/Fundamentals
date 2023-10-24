function storeProvisions(array, array2) {
  let store = [];
  let flagCheck = false;

  class Inventory {
    constructor(item, quantity) {
      this.item = item;
      this.quantity = quantity;
    }
  }

  for (let i = 0; i < array.length; i += 2) {
    let item = array[i];
    let quantity = +array[i + 1];

    store.push(new Inventory(item, quantity));
  }

  for (let j = 0; j < array2.length; j += 2) {
    let item = array2[j];
    let quantity = +array2[j + 1];

    for (const key of store) {
      if (key.item === item) {
        key.quantity += quantity;
        flagCheck = true;
      }
    }
    if (!flagCheck) {
      store.push(new Inventory(item, quantity));
    }

    flagCheck = false;
  }

  store.forEach((i) => console.log(`${i.item} -> ${i.quantity}`));
}

storeProvisions([
  'Salt', '2', 'Fanta', '4', 'Apple', '14', 
  'Water', '4', 'Juice', '5'
  ],
  [
  'Sugar', '44', 'Oil', '12', 'Apple', '7', 
  'Tomatoes', '7', 'Bananas', '30'
  ])
