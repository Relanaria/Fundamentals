function name(number){

    let arr = ["zero","one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    let str = number.toString();
    let length = str.length;
    let num = 0;
    let final = "";

    for(let i = 0; i < length; i++){
        num = Number(str[i]); 
    }

    final = arr[num];

    console.log(final);
}


name(1631);