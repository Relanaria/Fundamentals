function solve(input) {
  let string = input.shift();
  let pattern =
    /([#@])(?<firstWord>[A-Za-z]{3,})\1{2}(?<secondWord>[A-Za-z]{3,})\1/g;
  let wordCount = 0;
  let mirrorWords = [];
  let match = pattern.exec(string);

  while (match) {
    wordCount++;
    let { firstWord, secondWord } = match.groups;

    let reversedFirstWord = firstWord.split("").reverse().join("");
    if (reversedFirstWord === secondWord) {
      mirrorWords.push(`${firstWord} <=> ${secondWord}`);
    }

    match = pattern.exec(string);
  }

  if (wordCount < 1) {
    console.log(`No word pairs found!`);
  } else {
    console.log(`${wordCount} word pairs found!`); //changed
  }
  if (mirrorWords.length < 1) {
    console.log(`No mirror words!`);
  } else {
    console.log(`The mirror words are:`);
    console.log(mirrorWords.join(", ")); //changed
  }
}

solve(["#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#"]);
