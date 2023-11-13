function solve(input) {
  let pattern = /\b[A-Z][a-z]+[ ][A-Z][a-z]+\b/g;
  let validNames = [];
  let validName = null;
  while ((validName = pattern.exec(input)) !== null) {
    validNames.push(validName[0]);
  }
  console.log(validNames.join(" "));
}

solve(
  "Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov"
);

// function regExPhones(input) {
//     let validNames = [];
//     let pattern = /(?<!\d)[+]359([ -])2\1\d{3}\1\d{4}\b/g;
//     while ((validName = pattern.exec(input)) !== null) {
//     validNames.push(validName[0]);
//     }
//     console.log(validNames.join(', '));
//    }

function dates(input) {
  let reg = /\b(?<day>\d{2})([-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;
  let validDate = null;

  while ((validDate = reg.exec(input)) !== null) {
    let day = validDate.groups["day"];
    let month = validDate.groups["month"];
    let year = validDate.groups["year"];

    console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
  }
}

dates("01/Jan-1951, 23/sept/1973, 1/Feb/2016");
dates("13/Jul/1928, 10-Nov-1934, 25.Dec.1937");
