function bitcoin(input) {
  let goldInLeva = 0;
  let bitCoinCounter = 0;
  let bitcoinbouth = 0;
  let count = 0;
  let goldMined = 0;
  let bitcoinprice = 11949.16;

  for (let i = 0; i < input.length; i++) {
    count++;
    goldMined = 0;
    goldMined = input[i];

    if (count % 3 === 0) {
      goldMined *= 0.7;
    }

    goldInLeva += goldMined * 67.51;

    if (goldInLeva >= bitcoinprice && bitCoinCounter == 0) {
      bitCoinCounter = count;
    }

    if (goldInLeva >= bitcoinprice) {
      let newpurchase = Math.trunc(goldInLeva / bitcoinprice);
      bitcoinbouth += newpurchase;
      goldInLeva -= newpurchase * bitcoinprice;
    }
  }

  console.log(`Bought bitcoins: ${bitcoinbouth}`);
  if (bitcoinbouth > 0) {
    console.log(`Day of the first purchased bitcoin: ${bitCoinCounter}`);
  }
  console.log(`Left money: ${goldInLeva.toFixed(2)} lv.`);
}

bitcoin([3124.15, 504.212, 2511.124]);
