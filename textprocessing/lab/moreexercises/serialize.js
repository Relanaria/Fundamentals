function solve(arr) {
  let serialStrings = {};
  let string = arr[0];

  for (let i = 0; i < string.length; i++) {
    let ch = string[i];

    if (serialStrings.hasOwnProperty(ch)) {
      serialStrings[ch] += "/" + i.toString() ;
    } else {
      serialStrings[ch] = i.toString() ;
    }
    
  }

  for (const [key,value] of Object.entries(serialStrings)) {

    console.log(`${key}:${value}`);
    
  }
}
solve(["abababa"]);
// solve(["avjavamsdmcalsdm"] )
