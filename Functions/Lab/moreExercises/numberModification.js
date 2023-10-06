function numberModificantion(number) {
  let num = number;

  while (calculateDigitAverage(num) <= 5) {
    num = num * 10 + 9;
  }

  console.log(num);

  function calculateDigitAverage(num) {
    let sum = 0;
    let count = 0;

    while (num > 0) {
      const digit = num % 10;
      sum += digit;
      count++;
      num = Math.floor(num / 10);
    }

    const average = sum / count;
    return average;
  }
}

numberModificantion(5835);
