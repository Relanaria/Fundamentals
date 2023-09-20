function promotion(day, age){

    let dot = 0;

    if(age >= 0 && age <=18){
        dot = 1;
    }else if (age <=64){
        dot = 2;
    }else if (age <= 122){
        dot = 3;
    }else{
        console.log("Error!");
    }

    
}