function distinctArray(array) {

  for (let i = 0; i < array.length; i++) {
    let currentElement = array[i];

    for (let j = i + 1; j < array.length + 1; j++) {
      if (array[j] === currentElement) {
        array.splice(j, 1);
      }
    }
  }

  console.log(array.join(" "));
}

distinctArray([20, 8, 12, 13, 4, 
    4, 8, 5]
    );
