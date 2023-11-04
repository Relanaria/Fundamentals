function miners(arr) {
  let storage = new Map();

  for (let i = 0; i < arr.length; i += 2) {
    let matiral = arr[i];
    let quantity = Number(arr[i + 1]);

    if(!storage.has(matiral)){
        storage.set(matiral, quantity);
    }else{
        storage.set(matiral, storage.get(matiral) + quantity);
    }
    
  }

  storage.forEach((quantity, material) => {
    console.log(material, "->", quantity);
  });
}

miners([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
    
    );
