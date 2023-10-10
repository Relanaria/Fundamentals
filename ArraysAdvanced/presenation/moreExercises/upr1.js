function equalNeighborPairs(matrix) {
  let equalPairs = 0;

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (
        col < matrix[row].length - 1 &&
        matrix[row][col] === matrix[row][col + 1]
      ) {
        equalPairs++;
      }

      if (
        row < matrix.length - 1 &&
        matrix[row][col] === matrix[row + 1][col]
      ) {
        equalPairs++;
      }
    }
  }

  console.log(equalPairs);
}


equalNeighborPairs([['test', 'yo', 'yo', 
'ho'],
['well', 'done', 'no', 
'6'],
['not', 'done', 'yet', 
'5']]
)