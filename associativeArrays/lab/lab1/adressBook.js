function adres(arr) {
  let adresBook = {};

  for (const token of arr) {
    let [name, adress] = token.split(":");

    adresBook[name] = adress;
  }

  let entries = Object.entries(adresBook);

  entries.sort((a, b) => a[0].localeCompare(b[0]));

  let sorted = Object.fromEntries(entries);

  for (const [name, adres] of Object.entries(sorted)) {
    console.log(name, "->", adres);
  }
}
adres([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
