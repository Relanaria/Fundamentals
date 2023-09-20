function revers(input) {
  let word = input.toString();

  let splitString = word.split("");
  let reverse = splitString.reverse();
  let joinArray = reverse.join("");

  console.log(joinArray);
}

revers("hello")
