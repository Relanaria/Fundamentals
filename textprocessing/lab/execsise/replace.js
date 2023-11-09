function solve(str) {
  let sequence = "";

  for (let i = 0; i < str.length; i++) {
    if (sequence[sequence.length - 1] !== str[i]) {
      sequence += str[i];
    }
  }

  console.log(sequence);
}
solve("qqqwerqwecccwd");
