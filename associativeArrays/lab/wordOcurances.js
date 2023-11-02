function words(arr) {
  let words = {};

  for (const word of arr) {
    if (words.hasOwnProperty(word)) {
      let current = words[word] + 1;
      words[word] = current;
    } else {
      words[word] = 1;
    }
  }

  let transformed = Object.entries(words);
  let sorted = transformed.sort((a,b) => b[1] - a[1]);
  let final = Object.fromEntries(sorted);

  for (const [word, count] of Object.entries(final)) {
    console.log(word, '->',count, 'times');
  }
}

words(["dog", "bye", "city", "dog", "dad", 
"boys", "ginger"]
);
