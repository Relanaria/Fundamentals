function solve(arr) {
  let sequence = arr.shift().split(" ").map(Number);
  let coordinates = [];

  for (const crypted of arr) {
    let keyCount = 0;
    let str = "";

    if (crypted.includes("find")) {
      coordinates.forEach((str) => {
        console.log(
          `Found ${str.substring(
            str.indexOf("&") + 1,
            str.lastIndexOf("&")
          )} at ${str.substring(str.indexOf("<") + 1, str.lastIndexOf(">"))}`
        );
      });
      return;
    }

    for (let i = 0; i < crypted.length; i++) {
      let ch = crypted[i].charCodeAt(0) - sequence[keyCount];
      str += String.fromCharCode(ch);

      keyCount + 1 > sequence.length - 1 ? (keyCount = 0) : keyCount++;
    }

    coordinates.push(str);
  }
}

// solve([
//   "1 2 1 3",
//   "ikegfp'jpne)bv=41P83X@",
//   "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
//   "find",
// ]);

solve([
  "1 4 2 5 3 2 1",
  `Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
  "tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
  "'stj)>34W68Z@",
  "find",
]);
