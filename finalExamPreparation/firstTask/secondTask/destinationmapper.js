function solver(str){

    let reg = /([=\/])([A-Z][A-Za-z]{2,})\1/g;
    let valid = str.match(reg);
    let final = [];
    let travelpoints = 0;


    if (valid !== null) {
        for (const token of valid) {
            final.push(token.substring(1, token.length - 1));
            travelpoints += token.substring(1, token.length - 1).length
            
        }
    }
    console.log(`Destinations: ${final.join(", ")}`);
    console.log(`Travel Points: ${travelpoints}`);
}

solver("ThisIs some InvalidInput");