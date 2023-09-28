function maxEqualNumber(arr) {
  let sequenceOfNumbers = [];
  let leftMostSequence = [];
  let sequrnceCounter = 0;
  let firstCounter = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    let currElement = arr[i];
    sequrnceCounter = 1;
    sequenceOfNumbers = [];
    sequenceOfNumbers = [arr[i]];

    for (let j = i + 1; j < arr.length; j++) {
      if (currElement === arr[j]) {
        sequrnceCounter++;
        sequenceOfNumbers.push(arr[j]);
      } else {
        break;
      }
    }

    if (sequrnceCounter > firstCounter) {
      firstCounter = sequrnceCounter;
      leftMostSequence = sequenceOfNumbers;
    }
  }

  console.log(leftMostSequence.join(' '));
}

maxEqualNumber([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxEqualNumber([1, 1, 1, 2, 3, 1, 3, 3]);
maxEqualNumber([4, 4, 4, 4]);
maxEqualNumber([0, 1, 1, 5, 2, 2, 6, 3, 3]);
