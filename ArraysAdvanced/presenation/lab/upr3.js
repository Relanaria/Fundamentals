function houseParty(arr) {
  let listOfPeopleGoing = [];
  let nameHolder = "";

  for (let person of arr) {
    nameHolder = person.split(" ");
    let name = nameHolder[0];

    if (person.includes("is going!")) {
      if (listOfPeopleGoing.includes(name)) {
        console.log(`${name} is already in the list!`);
      } else {
        listOfPeopleGoing.push(name);
      }
    } else {
      if (listOfPeopleGoing.includes(name)) {
        let indexOfName = listOfPeopleGoing.indexOf(name);
        listOfPeopleGoing.splice(indexOfName, 1);
      } else {
        console.log(`${name} is not in the list!`);
      }
    }
  }

  console.log(listOfPeopleGoing.join("\n"));
}

houseParty([
  "Tom is going!",
  "Annie is going!",
  "Tom is going!",
  "Garry is going!",
  "Jerry is going!",
]);
