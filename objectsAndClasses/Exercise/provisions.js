function storeProvisions(array, array2) {
  let store = [];

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

    let existingProduct = store.find((product) => product.item === item);

    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      const newProduct = new Inventory(item, quantity);
      store.push(newProduct);
    }
  }

  store.forEach((i) => console.log(`${i.item} -> ${i.quantity}`));
}