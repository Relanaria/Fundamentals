function sumOfOddNumbers(N) {
  let count = 1;
  let sum = 0;
  for (let index = 1; index <= N; index++) {
    if (count % 2 !== 0) {
      console.log(count);
      sum += count;
    }
    count += 2;
  }
  console.log(`Sum: ${sum}`);
}

sumOfOddNumbers(3);
