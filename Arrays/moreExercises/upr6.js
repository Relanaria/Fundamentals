function isMagicalMatrix(matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) {
    console.log(false);
    return;
  }

  const numRows = matrix.length;
  const numCols = matrix[0].length;
  let referenceSum = matrix[0].reduce((acc, curr) => acc + curr, 0);

  for (let row = 0; row < numRows; row++) {
    const rowSum = matrix[row].reduce((acc, curr) => acc + curr, 0);
    if (rowSum !== referenceSum) {
      console.log(false);
      return;
    }
  }

  for (let col = 0; col < numCols; col++) {
    const colSum = matrix.reduce((acc, curr) => acc + curr[col], 0);
    if (colSum !== referenceSum) {
      console.log(false);
      return;
    }
  }

  console.log(true);
}

isMagicalMatrix([[11, 32, 45],
  [21, 0, 1],
  [21, 1, 1]]
 )