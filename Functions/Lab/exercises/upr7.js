function nXnMatrix(x) {
  let matrix = [];
  for (let k = 0; k < x; k++) {
    matrix.push([]);
  }
  for (let i = 0; i < x; i++) {
    for (let j = 0; j < x; j++) {
      matrix[i][j] = x;
    }
  }

  for (let i = 0; i < x; i++) {
    console.log(matrix[i].join(" "));
  }
}

nXnMatrix(3);
