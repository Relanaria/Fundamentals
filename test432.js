// function solve(input){

//     let arrayOfTickets = input.split(/[, ]+/g)

//     let winningTick = /[$@#^]{6,9}/gm;
//     let jackpot = /[$@#^]{10}/gm;

//     for (const ticket of arrayOfTickets) {


//         if(ticket.length === 20){
//             let leftHalf = ticket.substring(0,10);
//             let rightHalf = ticket.substring(10);
        
            
//             console.log(jackpot.test(rightHalf), jackpot.test(leftHalf));
//             console.log(jackpot.test(leftHalf), jackpot.test(rightHalf));
//             if(jackpot.test(leftHalf) && jackpot.test(rightHalf)){
//                 console.log("jackpot");
//             }else{
//                 console.log("5leva");
//             }
//         }else{
//             console.log("invalid ticket");
//         }
       
        
//     }

// }

let jackpot = /[$@#^]{10}/gm;

let ticket = '$$$$$$$$$$$$$$$$$$$$';
let leftHalf = ticket.substring(0,10);
let rightHalf = ticket.substring(10);
console.log(leftHalf);
console.log(rightHalf);

console.log(jackpot.test(rightHalf), jackpot.test(leftHalf));

// solve('$$$$$$$$$$$$$$$$$$$$')