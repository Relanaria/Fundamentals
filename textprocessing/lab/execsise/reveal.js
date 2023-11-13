function solve(first, second) {
  let words = first.split(", ");
  let arrOfWords = second.split(" ");

  for (const word of words) {
    let replacer = "*".repeat(word.length);
    for (let i = 0; i < arrOfWords.length; i++) {
      if (replacer === arrOfWords[i]) {
        arrOfWords[i] = word;
      }
    }
  }

  console.log(arrOfWords.join(" "));
}

solve(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
