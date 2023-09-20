function round(number, point){

    let precision = Number(point);

    if(precision > 15){
        precision = 15;
    }

    console.log(parseFloat(number.toFixed(precision)));
}


round(5.5, 3);