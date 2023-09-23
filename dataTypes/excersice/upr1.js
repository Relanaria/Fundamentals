function sumDigits(num) {
  let Str = String(num);
  let sum = 0;

  for (let i = 0; i < Str.length; i++) {
    sum += Number(Str[i]);
  }

  console.log(sum);
}

sumDigits(543);
