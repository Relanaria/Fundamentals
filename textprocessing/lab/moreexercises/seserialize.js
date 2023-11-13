function solver(arr) {
  let arrOfChars = [];

  for (const token of arr) {
    if (token.includes("end")) {
      break;
    }
    let [char, index] = token.split(":");
    let indexes = index.split("/");

    indexes.forEach((i) => {
      arrOfChars[i] = char;
    });
  }

  console.log(arrOfChars.join(""));
}

solver([
  "a:0/3/5/11",
  "v:1/4",
  "j:2",
  "m:6/9/15",
  "s:7/13",
  "d:8/14",
  "c:10",
  "l:12",
  "end",
]);

// avjavamsdmcalsdm
// avjavamsdmcalsdm
