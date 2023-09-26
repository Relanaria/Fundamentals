function findBalanceIndex(arr) {
  let check = true;

  for (let i = 0; i < arr.length; i++) {
    let leftSum = 0;
    let rightSum = 0;

    for (let j = 0; j < i; j++) {
      leftSum += arr[j];
    }

    for (let k = i + 1; k < arr.length; k++) {
      rightSum += arr[k];
    }

    if (leftSum === rightSum) {
      console.log(i);
      check = false;
    }
  }

  if (check) {
    console.log("no");
  }
}

findBalanceIndex([1, 2, 3, 3]);
findBalanceIndex([1, 2]);
findBalanceIndex([1]);
findBalanceIndex([1, 2, 3]);
findBalanceIndex([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
