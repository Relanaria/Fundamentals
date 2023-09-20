function devide(number){

    if(number % 10 === 0){
        console.log("The number is divisible by 10");
    }else if (number % 7 === 0){
        console.log("The number is divisible by 7");
    }else if (number % 6 === 0){
        console.log("The number is divisible by 6");
    }else if (number % 3 === 0){
        console.log("The number is divisible by 3");
    }else if (number % 2 === 0){
        console.log("The number is divisible by 2");
    }else {
        console.log("Not divisible");
    }
}

devide(30);
devide(17);
devide(15);
devide(12);
devide(1643);