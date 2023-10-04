function calculator(a, b, operation) {
    let multiply = (a1, b1) => a * b;
    let divide = (a2, b2) => a / b;
    let addition = (a3, b3) => a + b;
    let subtract = (a4, b4) => a - b;
  switch (operation) {
    case "multiply":
        console.log(multiply(a,b));
      break;
    case "divide":
        console.log(divide(a,b));
      break;
    case "add":
        console.log(addition(a,b));
      break;
    case "subtract":
        console.log(subtract(a,b));
      break;
  }
}


calculator(5, 10, 'multiply')
