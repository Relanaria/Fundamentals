function spiceFlow(number) {
  let amount = number;
  let spice = 0;
  let dayCount = 0;
  let exhaust = false;

  while (amount >= 100) {
    spice += amount;

    spice -= 26;

    if(spice < 0){
        spice = 0;
    }

    amount -= 10;
    dayCount++;
    if (amount - 10 < 100) {
        exhaust = true;
    }
  }

  if(exhaust){
    spice -= 26;
  }

  console.log(dayCount);
  console.log(spice);
}

spiceFlow(1);
