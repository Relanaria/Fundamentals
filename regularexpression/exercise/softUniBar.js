function bar(input) {
  let reg =
  /%(?<name>[A-Z][a-z]*)%[^|$%.]*?<(?<product>\w+)>[^|$%.]*?\|(?<count>\d+)\|[^|$%.]*?(?<price>[0-9]+(\.[0-9]+)?)\$/;

  let total = 0;

  let valid = null;
  for (const buy of input) {
    valid = reg.exec(buy);

    if (valid !== null) {
      let price = Number(valid.groups["count"]) * Number(valid.groups["price"]);
      total += price;
      console.log(
        `${valid.groups["name"]}: ${valid.groups["product"]} - ${price.toFixed(
          2
        )}`
      );
    }
  }
  console.log(`Total income: ${total.toFixed(2)}`);
}

bar([
  "%InvalidName%<Croissant>|2|10.3$",
  "%Peter%<Gum>1.3$",
  "%Maria%<Cola>|1|2.4",
  "%Valid%<Valid>valid|10|valid20$",
  "end of shift",
]);
