function negativeAndPosite(arr){

    let newArrOfNumbers = [];

    for (let i = 0; i < arr.length; i++) {
        
        if(arr[i] >= 0){
            newArrOfNumbers.push(arr[i]);
        }else{
            newArrOfNumbers.unshift(arr[i]);
        }
    }

    console.log(newArrOfNumbers.join(`\n`));
}

negativeAndPosite([-3, 2, -1, 0])