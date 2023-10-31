function dictionary(arr) {
  let terms = [];
  class Terms {
    constructor(term, defi) {
      this.term = term;
      this.defi = defi;
    }
  }

  for (const type of arr) {
    let terminology = type.split(":");
    let term = terminology[0].trim();
    let definition = terminology[1].split("").splice(1, terminology[1].length - 3).join("");
  

    let newFinal = term.replace(/[^a-zA-Z0-9 ]/g, '');

    if (terms.hasOwnProperty(newFinal)) {
      terms[newFinal].defi = definition;
    } else {
      terms[newFinal] = new Terms(newFinal, definition);
    }
  }

  const sortedTerms = Object.values(terms).sort((a, b) => a.term.localeCompare(b.term));

  for (const termObj of sortedTerms) {
    console.log(`Term: ${termObj.term} => Definition: ${termObj.defi}`);
  }
}

dictionary([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a  tropical shrub."}',
  '{"Coffee":"raboti"}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public  on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);
