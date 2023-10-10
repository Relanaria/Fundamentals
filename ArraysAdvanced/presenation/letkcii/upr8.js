function arrayManipulation(arr) {
  let arrOfNumbers = arr.shift().split(" ");
  arrOfNumbers = arrOfNumbers.map(Number);

  const add = (arr, n) => {
    arr.push(Number(n));
    return arr;
  };

  const remove = (arr, n) => {
    let filteredArr = arr.filter((x) => x != n);
    return filteredArr;
  };

  const removeAtIndex = (arr, n) => {
    arr.splice(n, 1);
    return arr;
  };

  const insert = (arr, n, x) => {
    arr.splice(x, 0, n);
    return arr;
  };

  for (let i = 0; i < arr.length; i++) {
    let currentManipulation = arr[i].split(" ");

    switch (currentManipulation[0]) {
      case "Add":
        arrOfNumbers = add(arrOfNumbers, currentManipulation[1]);
        break;
      case "Remove":
        arrOfNumbers = remove(arrOfNumbers, currentManipulation[1]);
        break;
      case "RemoveAt":
        arrOfNumbers = removeAtIndex(
          arrOfNumbers,
          Number(currentManipulation[1])
        );
        break;
      case "Insert":
        arrOfNumbers = insert(
          arrOfNumbers,
          Number(currentManipulation[1]),
          Number(currentManipulation[2])
        );
        break;
    }
  }

  console.log(arrOfNumbers.join(" "));
}

arrayManipulation([
  "4 19 2 53 6 43",
  "Add 3",
  "Remove 2",
  "RemoveAt 1",
  "Insert 8 3",
]);
