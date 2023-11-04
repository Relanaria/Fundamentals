function storage(arr) {
  let storage1 = new Map();

  for (const item of arr) {
    let [name, quantity] = item.split(" ");

    if (storage1.has(name)) {
      let currQuantity = storage1.get(name);
      currQuantity = Number(quantity) + Number(currQuantity);
      storage1.set(name, currQuantity);
    } else {
      storage1.set(name, quantity);
    }
  }

  for (const keys of storage1) {
    console.log(keys[0], '->',keys[1]);
  }
}

storage(['apple 50',
'apple 61',
'coffee 115',
'coffee 40']
);
