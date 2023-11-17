function solve(input) {
  let string = input.shift();
  let pattern = /(:{2}|\*{2})(?<emoji>[A-Z][a-z]{2,})(\1)/g;
  let reg = /[a-zA-z]/g;
  let reg1 = /[0-9]/g;

  let teshhold = string.match(reg1);
  let match = string.match(pattern);

  let coolThreshold = teshhold.reduce((acc, inc) => Number(acc) * Number(inc));

  console.log(`Cool threshold: ${coolThreshold}`);
  console.log(`${match.length} emojis found in the text. The cool ones are:`);

  for (const emoji of match) {
    let emj = emoji.match(reg);
    let curent = 0;

    for (const char of emj) {
      curent += char.charCodeAt(0);
    }

    if (curent > coolThreshold) {
      console.log(emoji);
    }
  }
}

solve([
  "It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using'Content here, content 99 here', making it look like readable **English**.",
]);
