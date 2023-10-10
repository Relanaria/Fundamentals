function train(arr) {
  let wagons = arr.shift().split(" ");
  let wagonsWithPeople = wagons.map(Number);
  let maxCapacityOfWagon = Number(arr.shift());

  for (let el of arr) {
    let currentElement = el.split(" ");

    if (currentElement[0] === "Add") {
      wagonsWithPeople.push(Number(currentElement[1]));
    } else {
      for (let i = 0; i < wagonsWithPeople.length; i++) {
        if (wagonsWithPeople[i] + Number(currentElement) <= maxCapacityOfWagon) {
            wagonsWithPeople[i] = wagonsWithPeople[i] + Number(currentElement);
            break;
        }
      }
    }
  }

  console.log(wagonsWithPeople.join(" "));
}

train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']);
