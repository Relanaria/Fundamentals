function solve(str) {
  let arrOfWords = str.split(" ");
  const regex = /^#[A-Za-z]+$/;
  let specialWords = arrOfWords.filter((x) => regex.test(x));

  specialWords.forEach((x) => console.log(x.substring(1, x.length)));
}

solve(
  "The symbol # is known #variously in English-speaking #regions3 as the #number sign"
);
