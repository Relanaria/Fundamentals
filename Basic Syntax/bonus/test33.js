function date(num1, num2, num3) {
    let year = Number(num1);
    let month = num2;
    let day = num3 + 1;
  
    if (day > 30) {
      day = 1;
      month += 1;
    }
  
    if (month > 12) {
      month = 1;
      year += 1;
    }
  
    console.log(`${year}-${month}-${day}`);
  }


date(1901, 1, 2)