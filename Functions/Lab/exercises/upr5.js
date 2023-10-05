function palidromeIntigers(array) {
  let reversed = [];
  reversed = reverse(array);

  for (let i = 0; i < array.length; i++) {
    if (reversed[i] == array[i]) {
      console.log("true");
    } else {
      console.log("false");
    }
  }

  function reverse(input) {
    let arrayOfReversedNumbers = [];
    for (let i = 0; i < input.length; i++) {
      let reversedString = input[i].toString().split("").reverse().join("");
      arrayOfReversedNumbers.push(reversedString);
    }
    return arrayOfReversedNumbers;
  }
}

palidromeIntigers([123, 323, 421, 121]);
