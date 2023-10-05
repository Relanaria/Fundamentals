function orders(product, quantity) {
  switch (product){
    case "coffee":
      console.log((quantity * 1.5).toFixed(2));
      break;
    case "water":
      console.log((quantity * 1).toFixed(2));
      break;
    case "coke":
      console.log((quantity * 1.4).toFixed(2));
      break;
    case "snacks":
      console.log((quantity * 2).toFixed(2));
      break;
  }
}

orders("coffee", 5);
