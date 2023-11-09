const uppercaseOnly = /^[A-Z]+$/;

let inputString = "AC/DC";
let sum = 0;

for (let i = 0; i < inputString.length; i++) {
    let ch = inputString.charAt(i);
    
    if (uppercaseOnly.test(ch)) {
        console.log(uppercaseOnly.test(ch));
        sum += ch.charCodeAt(0);
    }
}

console.log(sum);
