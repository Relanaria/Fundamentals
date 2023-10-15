function liftManaging(arr) {
  let numberOfPeopleWaiting = Number(arr.shift());
  let wagons = arr.shift().split(" ").map(Number);
  let maxPeopleInWagon = 4;
  let index = 0;

  while (index < wagons.length) {
    let people = 0;

    people = Math.abs(wagons[index] - maxPeopleInWagon);
    if (people > numberOfPeopleWaiting) {
      people = numberOfPeopleWaiting;
      numberOfPeopleWaiting = 0;
    } else {
      numberOfPeopleWaiting -= people;
    }
    wagons[index] = people + wagons[index];

    index++;
  }

  if (numberOfPeopleWaiting == 0 && wagons.every(wagon => wagon === 4)) {
    console.log(`The lift has empty spots! 
    ${wagons.join(" ")}`);
  } else if (numberOfPeopleWaiting > 0) {
    console.log(`There isn't enough space! ${numberOfPeopleWaiting} people in a queue! 
    ${wagons.join(" ")}`);
  } else {
    console.log(`${wagons.join(" ")}`);
  }
}

liftManaging([ 

    "20", 
   
    "0 2 0" 
   
   ]) ;
