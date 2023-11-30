function solve(str) {
  let patNumbers = /[\d]{1,2}/g;
  let valid = null;

  let words = str.split(/[\d]{1,2}/);
  let numbers = str.match(patNumbers);
  let index = 0;
  let finalString = "";

  for (const repeat of numbers) {
    let chars = words[index].toUpperCase().repeat(repeat);

    finalString += chars;
    index++;
  }

  console.log(finalString);
}

solve("aSd2&5s@1");
