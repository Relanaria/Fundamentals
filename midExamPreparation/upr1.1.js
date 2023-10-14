function ginuePig(arr) {
  let quantityOfFood = Number(arr[0]) * 1000;
  let hay = Number(arr[1]) * 1000;
  let cover = Number(arr[2]) * 1000;
  let weigthOfPig = Number(arr[3]) * 1000;
  let check = true;

  for (let i = 1; i <= 30; i++) {
    quantityOfFood -= 300;
    if (i % 2 === 0) {
      let amountOfHay = quantityOfFood * 0.05;
      hay -= amountOfHay;
    } 
    if (i % 3 === 0) {
      cover -= weigthOfPig / 3;
    }

    if (quantityOfFood <= 0 || hay <= 0 || cover <= 0) {
      check = false;
      break;
    }
  }

  if (check) {
    console.log(
      `Everything is fine! Puppy is happy! Food: ${quantityOfFood/1000}, Hay: ${hay/1000}, Cover: ${cover/1000}.`
    );
  } else {
    console.log("Merry must go to the pet store!");
  }

}

ginuePig(["10", 
"5", 
"5.2", 
"1"])


