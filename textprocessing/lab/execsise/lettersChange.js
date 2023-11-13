function solve(str) {
  const alphabetObject = create();
  let result = 0;

  let sequence = str.split(" ");
  sequence = sequence.filter((x) => x.length > 1);
  for (const word of sequence) {
    let sum = 0;
    let firstLetter = word[0];
    let lastLetter = word[word.length - 1];
    let number = Number(word.substring(1, word.length - 1));

    if (firstLetter.toUpperCase() === firstLetter) {
      sum += number / alphabetObject[firstLetter];
    } else {
      sum += number * alphabetObject[firstLetter.toUpperCase()];
    }

    if (lastLetter.toUpperCase() === lastLetter) {
      sum -= alphabetObject[lastLetter];
    } else {
      sum += alphabetObject[lastLetter.toUpperCase()];
    }
    result += sum;
  }

  console.log(result.toFixed(2));

  function create() {
    const alphabetObject = {};
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i < alphabet.length; i++) {
      const letter = alphabet[i];
      alphabetObject[letter] = i + 1;
    }

    return alphabetObject;
  }
}
solve("P34562Z q2576f  H456z");
solve('A12b s17G')
solve('a1A')
