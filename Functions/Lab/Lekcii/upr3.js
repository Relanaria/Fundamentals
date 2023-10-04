function repeatString(str, n) {
  console.log(str.repeat(n));
}
let repeated = repeatString("abc", 3);
console.log(repeated);

function repeat(str, n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += str;
  }
  console.log(result);
}

repeat("abc", 3);
