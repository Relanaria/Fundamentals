function solve(text) {
    let total = 0;
    let result = [];
    let pattern = /([#|])([A-Za-z\s]+)\1(\d{2}\/\d{2}\/\d{2})\1(\d{1,5})\1/g;
 
    let match = pattern.exec(text);
    while (match != null) {
        let name = match[2];
        let date = match[3];
        let calories = Number(match[4]);
 
        total += calories;
        result.push(`Item: ${name}, Best before: ${date}, Nutrition: ${calories}`);
        match = pattern.exec(text);  
    }
    let days = Math.floor(total / 2000);
console.log(`You have food to last you for: ${days} days!`);
for (let line of result) {
    console.log(line);
}
}

solve([
  "$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|",
]);
