function odd(str) {
  let words = str.toLowerCase().split(" ");

  const wordCounts = {};

  words.forEach((word) => {
    if (wordCounts[word]) {
      wordCounts[word] += 1;
    } else {
      wordCounts[word] = 1;
    }
  });

  const oddOccurrencesWords = [];

  for (const word in wordCounts) {
    if (wordCounts.hasOwnProperty(word) && wordCounts[word] % 2 !== 0) {
      oddOccurrencesWords.push(word);
    }
  }

  let final = oddOccurrencesWords.join(" ");
  console.log(final);
}
odd("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
odd("Cake IS SWEET is Soft CAKE sweet Food");
