function getCellDistance([x, y], [x0, y0]) {
  return Math.max(Math.abs(x - x0), Math.abs(y - y0)) + 1;
}

function orbit(width, height, [row0, col0]) {
  const rows = [[]];
  for (let row = 0; row < height; row++) {
    rows[row] = [];

    for (let col = 0; col < width; col++) {
      const distance = Math.max(Math.abs(row - row0), Math.abs(col - col0)) + 1;
      rows[row].push(distance);
    }
  }

  return rows;
}

const matrix = orbit(4, 5, [2, 2]);

for (let rows = 0; rows < matrix.length; rows++) {
  const row = matrix[rows];

  console.log(row.join(" "));
}
