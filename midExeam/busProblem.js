function busProblem(arr) {
  let numberOfCity = Number(arr.shift());

  let nameOfCity = "";
  let income = 0;
  let expenses = 0;
  let totalProfit = 0;
  let currentIncome = 0;
  let cityCount = 0;

  for (let i = 0; i < arr.length; i += 3) {
    nameOfCity = arr[i];
    income = +arr[i + 1];
    expenses = +arr[i + 2];
    cityCount++;

    if (cityCount % 5 === 0) {
      income -= income * 0.1;
    } else if (cityCount % 3 === 0) {
      expenses += expenses * 0.5;
    }

    currentIncome = income - expenses;
    totalProfit += currentIncome;

    console.log(
      `In ${nameOfCity} Burger Bus earned ${currentIncome.toFixed(2)} leva.`
    );
    if (cityCount === numberOfCity) {
      break;
    }
  }

  console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`);
}

busProblem([
  "5",

  "Lille",

  "2226.00",

  "1200.60",

  "Rennes",

  "6320.60",

  "5460.20",

  "Reims",

  "600.20",

  "452.32",

  "Bordeaux",

  "6925.30",

  "2650.40",

  "Montpellier",

  "680.50",

  "290.20",
]);
