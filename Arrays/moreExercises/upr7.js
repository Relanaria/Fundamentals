function modifyMatrix(input) {
  const matrix = input.map((row) => row.split(" ").map(Number));
  let diagonalSum1 = 0;
  let diagonalSum2 = 0;

  for (let i = 0; i < matrix.length; i++) {
    diagonalSum1 += matrix[i][i];
    diagonalSum2 += matrix[i][matrix.length - 1 - i];
  }

  if (diagonalSum1 === diagonalSum2) {
    const modifiedMatrix = [];

    for (let i = 0; i < matrix.length; i++) {
      const newRow = [];
      for (let j = 0; j < matrix[i].length; j++) {
        if (i === j || j === matrix[i].length - 1 - i) {
          newRow.push(matrix[i][j]);
        } else {
          newRow.push(diagonalSum1);
        }
      }
      modifiedMatrix.push(newRow);
    }

    modifiedMatrix.forEach((row) => console.log(row.join(" ")));
  } else {
    matrix.forEach((row) => console.log(row.join(" ")));
  }
}

modifyMatrix([
  "5 3 12 3 1",
  "11 4 23 2 5",
  "101 12 3 21 10",
  "1 4 5 2 2",
  "5 22 33 11 1",
]);
