function solve(str) {
  let sentence = str[0].split(" ");
  let dictionary = str[1];
  let replace = "";

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i].includes("_")) {
      for (const word of dictionary) {
        if (sentence[i].length === word.length) {
          sentence[i] = word;
        } else if (sentence[i].includes(",")) {
          replace = sentence[i].substring(0, sentence[i].length - 1);
          for (const word of dictionary) {
            if (replace.length === word.length) {
              sentence[i] = word + ",";
            }
          }
        } else if (sentence[i].includes(".")) {
          replace = sentence[i].substring(0, sentence[i].length - 1);
          for (const word of dictionary) {
            if (replace.length === word.length) {
              sentence[i] = word + ".";
            }
          }
        }
      }
    }
  }

  console.log(sentence.join(" "));
}

solve([
  "Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
  ["pie", "bring", "glad", "During", "amazing", "pharmacist", "sprained"],
]);
