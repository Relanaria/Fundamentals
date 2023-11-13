function solver(input) {
  let price = 0;
  let pattern = />>(?<item>[a-zA-Z]+)<<(?<price>[\d.]+)!(?<quantity>\d+)/;
  console.log("Bought furniture:");

  for (const furniture of input) {
    let validItem = pattern.exec(furniture);

    if (validItem !== null) {
      console.log(validItem.groups["item"]);
      price += validItem.groups["price"] * validItem.groups["quantity"];
    }
  }
  console.log(`Total money spend: ${price.toFixed(2)}`);
}

solver([">Invalid<<!4", ">Invalid<<!2", ">Invalid<<!5", "Purchase"]);
