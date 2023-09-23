function specialNumbers(n) {

  for (let i = 1; i <= n; i++) {
    let str = i.toString();
    let sum = 0;

    for (let j = 0; j < str.length; j++) {
      sum += Number(str[j]);
    }

    let output = sum == 5 || sum == 7 || sum == 12 ? "-> True" : "-> False";

    console.log(`${i} ${output}`);
  }
}

specialNumbers(20);