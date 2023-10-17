function memoryGame(array) {
    let sequence = array.shift().split(" ");
    let moves = 0;
  
    for (const twin of array) {
      let [index1, index2] = twin.split(" ").map(Number);
      
      if (index1 === index2) {
        let middleOfArray = Math.floor(sequence.length / 2);
        sequence.splice(middleOfArray, 0, `-${moves}a`, `-${moves}a`);
        console.log("Invalid input! Adding additional elements to the board");
      } else if (
        index1 >= 0 && index1 < sequence.length &&
        index2 >= 0 && index2 < sequence.length &&
        sequence[index1] === sequence[index2]
      ) {
        console.log(`Congrats! You have found matching elements - ${sequence[index1]}!`);
        sequence.splice(index1, 1);
        sequence.splice(index2 > index1 ? index2 - 1 : index2, 1);
      } else {
        console.log("Try again!");
      }
  
      moves++;
  
      if (sequence.length === 0) {
        console.log(`You have won in ${moves} turns!`);
        return;
      }
  
      if (twin.includes("end")) {
        console.log("Sorry you lose :(");
        console.log(`${sequence.join(" ")}`);
        return;
      }
    }
  }
  
  memoryGame([
    "a 2 4 a 2 4",
    "4 0",
    "0 2",
    "0 1",
    "0 1",
    "end"
  ]);
  