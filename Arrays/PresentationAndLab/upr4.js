function revers(input){
    
    input.reverse();

    console.log(input.join(' '));
}

revers(['a','b','c','d','e'])

// от софтуни лекции 
function reverse(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
    let oldElement = arr[i];
    let previousIndex = arr.length - 1 - i;
    arr[i] = arr[previousIndex];
    arr[previousIndex] = oldElement;
    }
    console.log(arr.join(' '));
}