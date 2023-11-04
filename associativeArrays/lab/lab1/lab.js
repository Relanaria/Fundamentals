function phoneBook(arr) {
  let phones = {};

  for (const item of arr) {
    let [name, phone] = item.split(" ");

    phones[name] = phone;
  }

  for (const [name, phone] of Object.entries(phones)) {
    console.log(name, "->", phone);
  }
}

phoneBook([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
