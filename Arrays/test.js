function solve(input) {
    input = input.map(Number); // обръща целия масив от стринг в числа и ги записва в нов масив
    console.log(input[0] + input.pop()); // събира първия и последния елемент на масива (.pop премахва последния елемент от масива тоесет lenght - 1)

    let fruits = ["apple","banana","kiwi"];
    fruits.push("pineapple","Dog"); // добавя елементи в края на масива (може да са повече от един)
    console.log(fruits);
   
    let myArray = ["one","two","three","four","five"];
     myArray.shift(); // ["two","three","four","five"] премахва първия елемент от масива 
     myArray.unshift("purple"); // добавя елемент в началото на  масива
  

     const names = ["Andrew", "Tyrone", "Paul", "Maria", "Gayatri"];

while (typeof (i = names.shift()) !== "undefined") {
  console.log(i);
}
// Andrew, Tyrone, Paul, Maria, Gayatri


    }


    solve(["5", "10" ])