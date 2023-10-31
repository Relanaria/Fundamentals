function processArray(arr) {
  let terms = [];
  terms.push(JSON.parse(arr.shift()));

  for (const term of arr) {
    let obj = JSON.parse(term);
    let keys = Object.keys(obj);
    let value = Object.values(obj);

    let updated = false; 

    for (const existingTerm of terms) {
      if (keys in existingTerm) {
        existingTerm[keys] = value;
        updated = true;
        break; 
      }
    }

    if (!updated) {
      terms.push(obj);
    }
  }

  console.log(JSON.stringify(terms));
}


processArray([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a  tropical shrub."}',
  '{"Coffee":"raboti"}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public  on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);
