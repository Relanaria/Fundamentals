function arrayManipulation(commands, arr) {
  let result = arr.slice(0);

  for (let command of commands) {
    let tokens = command.split(" ");
    let action = tokens[0];

    switch (action) {
      case "add":
        let addIndex = Number(tokens[1]);
        let addElement = Number(tokens[2]);
        result.splice(addIndex, 0, addElement);
        break;

      case "addMany":
        let addManyIndex = Number(tokens[1]);
        let addElements = tokens.slice(2).map(Number);
        result.splice(addManyIndex, 0, ...addElements);
        break;

      case "contains":
        let containsElement = Number(tokens[1]);
        let containsIndex = result.indexOf(containsElement);
        console.log(containsIndex);
        break;

      case "remove":
        let removeIndex = Number(tokens[1]);
        result.splice(removeIndex, 1);
        break;

      case "shift":
        let positions = Number(tokens[1]);
        for (let i = 0; i < positions; i++) {
          let shiftedElement = result.shift();
          result.push(shiftedElement);
        }
        break;

      case "sumPairs":
        result = sumPairs(result);
        break;

      case "print":
        console.log(`[ ${result.join(", ")} ]`);
        break;
    }
  }

  function sumPairs(array) {
    let summedArray = [];
    for (let i = 0; i < array.length; i += 2) {
      let pairSum = array[i] + (array[i + 1] || 0);
      summedArray.push(pairSum);
    }
    return summedArray;
  }
}

// Example usage:
arrayManipulation(
  ["add 0 1", "add 0 2", "add 0 3", "sumPairs", "print"],
  [4, 5, 6]
);
