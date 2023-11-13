function solve(arr) {
  let str = arr[0].split("");
  let sum = 0;

  if (arr[1] === "UPPERCASE") {
    for (const ch of str) {
      if (ch.match(/^[A-Z]+$/g)) {
        sum += ch.charCodeAt(0);
      }
    }
  } else {
    for (const ch of str) {
      if (ch.match(/^[a-z]+$/g)) {
        sum += ch.charCodeAt(0);
      }
    }
  }

  console.log(`The total sum is: ${sum}`);
}
solve(["HelloFromMyAwesomePROGRAM", "LOWERCASE"]);
solve(["AC/DC", "UPPERCASE"]);
