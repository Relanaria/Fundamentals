function condense(arr) {

  while (arr.length > 1) {
    let condensedArray = [];
    for (let i = 0; i < arr.length - 1; i++) {
      condensedArray.push(arr[i] + arr[i + 1]);
    }
    arr = condensedArray;
  }

  console.log(arr.join(''));
}

condense([5, 0, 4, 1, 2]);
