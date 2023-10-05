function factorialDevisor(a, b) {
  let sumOfFirstFactorialNumber = factorialSum(a);
  let sumOfSecoundFactorialNumber = factorialSum(b);
  console.log((sumOfFirstFactorialNumber / sumOfSecoundFactorialNumber).toFixed(2));

  function factorialSum(x) {
    let sumOfFactorial = 1;
    for (let i = 1; i <= x; i++) {
      sumOfFactorial = sumOfFactorial * i;
    }
    return sumOfFactorial;
  }
}

factorialDevisor(6, 2);
