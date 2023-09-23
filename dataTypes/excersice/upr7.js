function upperLowerCase(char) {
  let result = /[A-Z]/.test(char);

  console.log(result ? "upper-case" : "lower-case");
}

upperLowerCase("L");
upperLowerCase("i");
upperLowerCase("g");
upperLowerCase("D");
