function bitcoin(input){

    let goldInLeva = 0;
    let bitCoinCounter = 0;
    let count = 0;
    let goldMined = 0;


    for (let i = 0; i < input.length; i++) {
        goldMined = 0;
        goldMined = input[i];

        if(i % 3 === 0){
            goldMined -= goldMined * 0.3;
        }

        goldInLeva += goldMined * 67.51;

        if(goldInLeva >= 11949.16){
            bitCoinCounter++;
            goldInLeva -= 11949.16;
            count = i;
        }

    }

    console.log(`Bought bitcoins: ${bitCoinCounter}`);
    if(count >= 1){
        console.log(`Day of the first purchased bitcoin: ${count}`);
    }
    console.log(`Left money: ${goldInLeva.toFixed(2)} lv.`);
}


bitcoin([50, 100])