function sum(start, end){
    let num = "";
    let sum = 0;

    for (let index = start; index <= end; index++) {
        sum += index;
        num += index + " ";
    }

    console.log(num);
    console.log(`Sum: ${sum}`);
}

sum(5, 10);