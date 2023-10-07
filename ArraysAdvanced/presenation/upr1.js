function sumFirstAndLastElement(arr){


    let firstElement = Number(arr.shift());
    let lastElement = Number(arr.pop());

    console.log(firstElement + lastElement);
}

sumFirstAndLastElement([4, 5, 1])


// function solve(input) {
//     input = input.map(Number); .map minava prez celiq masiv i obrushta chislata ot string v int
//      console.log(input[0]
//      + input.pop());
//     }