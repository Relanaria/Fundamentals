function solve(input) {
  let key = input.shift();

  for (const token of input) {
    if (token.includes("Contains")) {
      let [con, sub] = token.split(">>>");

      key.includes(sub)
        ? console.log(`${key} contains ${sub}`)
        : console.log("Substring not found!");
    } else if (token.includes("Flip")) {
      let [command, firstArgument, secondArgument, thirdArgument] =
        token.split(">>>");
      temp1 = "";
      let ind2 = Number(secondArgument);
      let ind3 = Number(thirdArgument);
      let replaced = key.substring(ind2, ind3);
      if (firstArgument === "Upper") {
        temp1 = key.substring(ind2, ind3).toUpperCase();
        key = key.replace(replaced, temp1);
        console.log(key);
      } else if (firstArgument === "Lower") {
        temp1 = key.substring(ind2, ind3).toLowerCase();
        key = key.replace(replaced, temp1);
        console.log(key);
      }
    } else if (token.includes("Slice")) {
      let [s_, startIndex, endIndex] = token.split(">>>");

      key = key.substring(0, startIndex) + key.substring(Number(endIndex));
      console.log(key);
    } else if (token.includes("Generate")) {
      console.log(`Your activation key is: ${key}`);
    }
  }
}

// 134F5ftuni2020rockz42
// 134SF5ftuni2020rockz42

solve([
  "134softsf5ftuni2020rockz42",
  "Slice>>>3>>>7",
  "Contains>>>-rock",
  "Contains>>>-uni-",
  "Contains>>>-rocks",
  "Flip>>>Upper>>>2>>>8",
  "Flip>>>Lower>>>5>>>11",
  "Generate",
]);

// solve([
//   "abcdefghijklmnopqrstuvwxyz",
//   "Slice>>>2>>>6",
//   "Flip>>>Upper>>>3>>>14",
//   "Flip>>>Lower>>>5>>>7",
//   "Contains>>>def",
//   "Contains>>>deF",
//   "Generate",
// ]);
