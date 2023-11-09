function solve(text, word) {
  let arrWords = text.split(" ");
  let count = 0;

  for (const words of arrWords) {
    if (words === word) {
      count++;
    }
  }

  console.log(count);
}

solve("This is a word and it is a sentece", "is");
