function solve(input) {
    let pattern = /^(?<start>@#+)(?<barcode>[A-Z][A-Za-z0-9]{4,}[A-Z])(?<end>@#+)$/;
 
  let n = input.shift("");
  let code = "";
  for (const item of input) {
    let product = pattern.exec(item);
    
    if (product) {
      let digitPattern = /\d/g;
      code = item.match(digitPattern);
      
      code === null
        ? console.log(`Product group: 00`)
        : console.log(`Product group: ${code.join("")}`);
    } else {
      console.log(`Invalid barcode`);
    }
  }
}

solve(["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"])
;
