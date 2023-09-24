function primeNumber(n) {
  let isPrime = true;

  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log("true");
  } else {
    console.log("false");
  }
}

primeNumber(7);
primeNumber(8);
primeNumber(81);
