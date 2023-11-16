function solve(input) {
  let concealedMesg = input.shift();

  for (const token of input) {
    if (token.includes("InsertSpace")) {
      let [insert, index] = token.split(":|:");

      concealedMesg =
        concealedMesg.substring(0, index) +
        " " +
        concealedMesg.substring(index);
      console.log(concealedMesg);
    } else if (token.includes("ChangeAll")) {
      let [change, sub, rep] = token.split(":|:");

      while (concealedMesg.includes(sub)) {
        concealedMesg = concealedMesg.replace(sub, rep);
      }
      console.log(concealedMesg);
    } else if (token.includes("Reverse")) {
      let [rev, sub] = token.split(":|:");

      if (concealedMesg.includes(sub)) {
        let temp = concealedMesg.substring(
          concealedMesg.indexOf(sub),
          sub.length + concealedMesg.indexOf(sub)
        );
        temp = temp.split("").reverse().join("");
        concealedMesg =
          concealedMesg.substring(0, concealedMesg.indexOf(sub)) +
          concealedMesg.substring(sub.length + concealedMesg.indexOf(sub)) +
          temp;

        console.log(concealedMesg);
      } else {
        console.log("error");
      }
    } else if (token.includes("Reveal")) {
      console.log(`You have a new text message: ${concealedMesg}`);
    }
  }
}

solve([
  "Hiware?uiy",
  "ChangeAll:|:i:|:o",
  "Reverse:|:?uoy",
  "Reverse:|:jd",
  "InsertSpace:|:3",
  "InsertSpace:|:7",
  "Reveal",
]);
