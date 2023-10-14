function computerStore(arr) {
  let customer = arr.pop();
  let pricesOfParts = arr.map(Number);
  let totalPrice = 0;
  let tax = 0;

  for (const price of pricesOfParts) {
    if (price > 0) {
      totalPrice += price;
    } else {
      console.log("Invalid price!");
    }
  }

  if (totalPrice === 0) {
    console.log("Invalid order!");
  } else {
    tax = totalPrice * 0.2;
    console.log("Congratulations you've just bought a new computer!");
    console.log(`Price without taxes: ${totalPrice.toFixed(2)}$ `);
    console.log(`Taxes: ${tax.toFixed(2)}$ `);
    console.log("-----------");
    totalPrice += tax;
    if (customer === "special") {
      totalPrice -= totalPrice * 0.1;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}$`);
  }
}

computerStore([ 

    'regular' 
    
    ]) 
