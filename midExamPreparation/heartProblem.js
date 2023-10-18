function heartProblem(arr) {
  let houseLove = arr.shift().split("@").map(Number);
  let jump = 0;

  for (const element of arr) {
    let command = element.split(" ");
    let number = Number(command[1]);

    if (command[0] === "Love!") {
      const allEqual = (arr) => arr.every((v) => v === 0);
      let fail = houseLove.filter((x) => x !== 0);
      let numberOfFail = fail.length;

      console.log(`Cupid's last position was ${jump}.`);

      if (allEqual(houseLove)) {
        console.log("Mission was successful.");
      } else {
        console.log(`Cupid has failed ${numberOfFail} places.`);
      }
      return;
    }

    jump += number;

    if (jump >= houseLove.length ) {
      jump = 0;
    }

    if (houseLove[jump] <= 0) {
      console.log(`Place ${jump} already had Valentine's day.`);
    } else if (houseLove[jump] - 2 <= 0) {
      houseLove[jump] = houseLove[jump] - 2;
      console.log(`Place ${jump} has Valentine's day.`);
    } else {
      houseLove[jump] = houseLove[jump] - 2;
    }
  }
}

heartProblem(["10@10@10@2", 

"Jump 1", 

"Jump 2", 

"Love!"])
