function wordTracker(arr) {
  let wordsTracked = new Map();
  let wordsToTrack = arr.shift().split(" ");

  for (const word of wordsToTrack) {
    wordsTracked.set(word, 0);
    for (const sentence of arr) {
      if (sentence.toLowerCase() === word) {
        let current = wordsTracked.get(word) + 1;
        wordsTracked.set(word, current);
      }
    }
  }

  wordsTracked = new Map(
    [...wordsTracked.entries()].sort((a, b) => b[1] - a[1])
  );

  for (const keys of wordsTracked) {
    console.log(keys[0], "-", keys[1]);
  }
}

wordTracker([
  "is the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "the",
  "And",
  "finally",
  "the",
  "the",
  "sentence",
]);
