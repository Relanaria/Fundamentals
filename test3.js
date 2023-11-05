function diagonalDifference(arr) {
  let leftToRigth = arr.length;
  let leftSum = 0;
  let rightSum = 0;
  let count = 0;

  for (let i = 0; i < leftToRigth; i++) {
    for (let j = i; j <= i; j++) {
      leftSum += arr[i][j];
    }
  }

  for (let j = leftToRigth - 1; j >= 0; j--) {
    for (let i = count; i < count + 1; i++) {
        rightSum += arr[i][j];
    }
    count++;
  }

  console.log(Math.abs(rightSum - leftSum));
}

diagonalDifference([
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
]);
