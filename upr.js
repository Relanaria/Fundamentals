function toyShop(input){

  let puzzle = 2.60;
  let doll = 3;
  let teddyBear = 4.10;
  let minion = 8.20;
  let toyCar = 2;

  let tripPrice = Number(input[0]);
  let puzzleSum = Number(input[1]);
  let dollSum = Number(input[2]);
  let teddyBearSum = Number(input[3]);
  let minionSum = Number(input[4]);
  let toyCarSum = Number(input[5]);

  let priceSum = ( (puzzleSum * puzzle) + (dollSum * doll) + (teddyBearSum * teddyBear) + (minionSum * minion) + (toyCarSum * toyCar) );
  let toysCount = ( puzzleSum + dollSum + teddyBearSum + minionSum + toyCarSum );


  if (toysCount >= 50){
    priceSum = priceSum - (priceSum * 0.75)
  };

  let rent = priceSum * 0.10;
  let totalExpenses = priceSum - rent;


  if (totalExpenses <= tripPrice){
      let remainingMoney = (totalExpenses - tripPrice).toFixed(2);
      console.log(`Yes! ${remainingMoney} lv left`);
  }
  else{
      let neededMoney = (tripPrice - totalExpenses).toFixed(2);
      console.log(`No enough money! ${neededMoney} lv needed.`);
  }


}

toyShop(["40.8", "20", "25", "30", "50", "10"])