let arr = [{ name: 4 }, { name: 5 }, { name: 3 }];


let num = 3;

arr.forEach(element => { 
    if(element.name === num){
        element.name += num;
    }
});

console.log(JSON.stringify(arr));