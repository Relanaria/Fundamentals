function solve(input) {
  let preDefined = input.shift();

  for (const token of input) {
    let str = "";

    if (token.includes("TakeOdd")) {
      preDefined = oddLeters(preDefined);
      console.log(preDefined);
    } else if (token.includes("Cut")) {
      let [cut, index, length] = token.split(" ");

      let word = preDefined.substring(
        Number(index),
        Number(index) + Number(length)
      );
      preDefined =
        preDefined.substring(0, preDefined.indexOf(word)) +
        preDefined.substring(preDefined.indexOf(word) + Number(length));
      console.log(preDefined);
    } else if (token.includes("Substitute")) {
      let [sub, strsub, replaceStr] = token.split(" ");

      if (preDefined.includes(strsub)) {
        while (preDefined.includes(strsub)) {
          preDefined = preDefined.replace(strsub, replaceStr);
        }
        console.log(preDefined);
      } else {
        console.log("Nothing to replace!");
      }
    } else if (token.includes("Done")) {
      console.log(`Your password is: ${preDefined}`);
    }
  }

  function oddLeters(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
      if (i % 2 !== 0) {
        newStr += str[i];
      }
    }

    return newStr;
  }
}

solve([
  "up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
  "TakeOdd",
  "Cut 18 2",
  "Substitute ! ***",
  "Substitute ? .!.",
  "Done",
]);
