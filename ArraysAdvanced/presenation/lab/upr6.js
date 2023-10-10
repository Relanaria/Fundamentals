function bombingNumbers(array, bombParams) {
  const [specialBombNumber, power] = bombParams;
  let result = 0;

  while (array.includes(specialBombNumber)) {
    const bombIndex = array.indexOf(specialBombNumber);
    const start = Math.max(0, bombIndex - power);
    const end = Math.min(array.length - 1, bombIndex + power);

    array.splice(start, end - start + 1);
  }

  result = array.reduce((a, b) => a + b, 0);

  console.log(result);
}

// bombingNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
// bombingNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombingNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
// bombingNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
