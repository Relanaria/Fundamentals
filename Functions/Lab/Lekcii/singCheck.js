function signCheck(num1, num2, num3) {
  let arrOfNumbers = [num1, num2, num3];
  let result = positiveOrNegative(arrOfNumbers);

  if (result) {
    console.log("Positive");
  } else {
    console.log("Negative");
  }

  function positiveOrNegative(input) {
    let negativeCount = 0;
    for (let i = 0; i < input.length; i++) {
      if (input[i] < 0) {
        negativeCount++;
      }
    }

    if (negativeCount % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
}

signCheck(5, -12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);
signCheck(-5, 1, 1);
signCheck(2, 4, -3);
signCheck(4, 2, 1);
