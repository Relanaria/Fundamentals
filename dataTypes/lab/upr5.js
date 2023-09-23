function amazingNumbers(number) {
  let convert = number.toString();
  let sum = 0;

  for (let i = 0; i < convert.length; i++) {
    sum += Number(convert[i]);
  }

  let result = sum.toString().includes("9");

  console.log(
    result ? `${number} Amazing? True` : `${number} Amazing? False`
  );
}

amazingNumbers(1234);
amazingNumbers(1233);
amazingNumbers(999);
