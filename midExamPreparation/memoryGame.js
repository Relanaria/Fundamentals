function memoryGame(array) {
  let sequence = array.shift().split(" ");
  let moves = 0;

  for (const twin of array) {
    if (twin.includes("end")) {
      console.log(`Sorry you lose :(`);
      console.log(`${sequence.join(" ")}`);
      return;
    }
    let [index1, index2] = twin.split(" ").map(Number);
    moves++;

    if (sequence.hasOwnProperty(index1) && sequence.hasOwnProperty(index2)) {
      if (index1 === index2) {
        let middleOfArray = sequence.length / 2;
        sequence.splice(middleOfArray, 0, `-${moves}a`, `-${moves}a`);
        console.log("Invalid input! Adding additional elements to the board");
      } else if (sequence[index1] == sequence[index2]) {
        console.log(
          `Congrats! You have found matching elements - ${sequence[index1]}!`
        );
        sequence.splice(index1, 1);
        sequence.splice(index2 > index1 ? index2 - 1 : index2, 1);
      } else {
        console.log("Try again!");
      }
    } else {
      let middleOfArray = sequence.length / 2;
      sequence.splice(middleOfArray, 0, `-${moves}a`, `-${moves}a`);
      console.log("Invalid input! Adding additional elements to the board");
    }

    if (sequence.length === 0 || sequence.length === 1) {
      console.log(`You have won in ${moves} turns!`);
      return;
    }
  }
}

// memoryGame(["a 2 4 a 2 4", "0 1", "0 2", "0 1", "0 1", "end"]);
// memoryGame(["1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0", "end"]);
memoryGame(["a 2 4 a 2 4", "3 3", "0 2", "0 1", "0 1", "end"]);
