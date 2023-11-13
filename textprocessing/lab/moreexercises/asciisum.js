function solve(arr) {
  let firstChar = Math.max(arr[0].charCodeAt(0), arr[1].charCodeAt(0));
  let secoundChar = Math.min(arr[0].charCodeAt(0), arr[1].charCodeAt(0));
  let sum = 0;

  for (const ch of arr[2].split("")) {
    let currentAscii = ch.charCodeAt(0);

    if (currentAscii > secoundChar && currentAscii < firstChar) {
      sum += currentAscii;
    }
  }

  console.log(sum);
}

solve([".", "@", "dsg12gr5653feee5"]);
solve(["?", "E", "@ABCEF"]);
solve(["a", "1", "jfe392$#@j24ui9ne#@$"]);
