function arrayManipulation(array, array2) {
  let manipulatedArray = array;
  let add = (index, number, manipulatedArray) =>
    manipulatedArray.splice(index, 0, Number(number));
  let remove = (index, manipulatedArray) => manipulatedArray.splice(index, 1);
  let printCheck = false;

  for (let el of array2) {
    let split = el.split(" ");
    let command = split.shift();
    if (printCheck) {
      break;
    }

    switch (command) {
      case "add":
        add(split[0], split[1], manipulatedArray);
        break;

      case "addMany":
        addMany(split, manipulatedArray);
        break;

      case "contains":
        let check = includeCheck(manipulatedArray, Number(split[0]));
        if (check == -1) {
          console.log(check);
        } else {
          console.log(check);
        }
        break;

      case "remove":
        remove(Number(split[0]), manipulatedArray);

        break;

      case "shift":
        shiftArray(Number(split[0]), manipulatedArray);
        break;

      case "sumPairs":
        manipulatedArray = sumNumberByPairs(manipulatedArray);
        break;

      case "print":
        console.log(`[ ${manipulatedArray.join(", ")} ]`);
        printCheck = true;
        break;
    }
  }
  function addMany(arr, array) {
    let index = Number(arr.shift());

    for (let element of arr) {
      array.splice(index, 0, Number(element));
      index++;
    }
    return array;
  }

  function includeCheck(array, number) {
    let numberCheck = array.includes(number);
    if (numberCheck) {
      let index = array.indexOf(number);
      return index;
    } else {
      return -1;
    }
  }

  function shiftArray(number, array) {
    let elementHolder = 0;

    for (let i = 0; i < number; i++) {
      elementHolder = array.shift();
      array.push(elementHolder);
    }
  }

  function sumNumberByPairs(array) {
    let summedArray = [];
    for (let i = 0; i < array.length; i += 2) {
      let pairSum = array[i] + (array[i + 1] || 0);
      summedArray.push(pairSum);
    }
    return summedArray;
  }
}

arrayManipulation(
  [1, 2, 3, 4, 5],
  ["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"]
);
