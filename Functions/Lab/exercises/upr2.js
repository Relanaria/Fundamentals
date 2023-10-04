function addAndSubtract(num1, num2, num3) {
  let sum = add(num1, num2);
  let result = subtract(sum, num3);
  console.log(result);

  function subtract(par1, par2) {
    return par1 - par2;
  }

  function add(a, b) {
    return a + b;
  }
}

addAndSubtract(23, 6, 10);
