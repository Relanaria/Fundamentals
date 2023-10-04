function createAndPrintOrbitMatrix(input) {
    const [width, height, row, col] = input;
    const orbitMatrix = [];
  
    const getCellDistance = ([x, y], [x0, y0]) =>
      Math.max(Math.abs(x - x0), Math.abs(y - y0)) + 1;
  
    for (let i = 0; i < height; i++) {
      orbitMatrix[i] = [];
      for (let j = 0; j < width; j++) {
        const distance = getCellDistance([i, j], [row, col]);
        orbitMatrix[i].push(distance);
      }
    }
  
    for (let i = 0; i < height; i++) {
      console.log(orbitMatrix[i].join(" "));
    }
  }
  
  createAndPrintOrbitMatrix([4,4,0,0]);