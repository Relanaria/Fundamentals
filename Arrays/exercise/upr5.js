function maxNumber(arr) {
  let newArr = [];

  while (arr.length > 1) {
    let storage = arr.shift();
    let check = false;

    for (let i = 0; i < arr.length; i++) {
      if (storage > arr[i]) {
        check = true;
      } else {
        check = false;
        break;
      }
    }

    if (check) {
      newArr.push(storage);
    }
  }

  let end = arr.shift();
  newArr.push(end);

  console.log(newArr.join(" "));
}

maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);
