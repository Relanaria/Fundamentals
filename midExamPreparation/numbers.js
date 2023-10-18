function averageHighestNumbers(str) {
  let arrayOfNumbers = str.split(" ").map((x) => +x);
  let averageNumber = arrayOfNumbers.reduce((acc, num) => acc + num, 0) / arrayOfNumbers.length;

  arrayOfNumbers = bigestNum(arrayOfNumbers, averageNumber);


  arrayOfNumbers.sort((a, b) => {
    return b - a;
  });

  if (arrayOfNumbers.length === 0) {
    console.log("No");
  } else {
    console.log(arrayOfNumbers.join(" "));
  }

  function bigestNum(array, average) {
    let newArr = array
      .filter((num) => num > average)
      .sort((a, b) => b - a)
      .slice(0, 5);

    return newArr;
  }
}

averageHighestNumbers("10 20 30 40 50");
