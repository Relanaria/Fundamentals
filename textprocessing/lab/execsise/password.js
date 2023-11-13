function solve(arr) {
  let concratenate = (arr[0] + arr[1]).split("");
  let chars = arr[2];
  let count = 0;

  for (let i = 0; i < concratenate.length; i++) {
    if (isVowel(concratenate[i])) {
      concratenate[i] = chars[count].toUpperCase();
      count++;
      if (count >= chars.length) {
        count = 0;
      }
    }
  }

  console.log(`Your generated password is ${concratenate.reverse().join("")}`);

  function isVowel(c) {
    return ["a", "e", "i", "o", "u"].indexOf(c.toLowerCase()) !== -1;
  }
}

solve(["areyousureaboutthisone", "notquitebutitrustyou", "disturbed"]);

//SIytsDrtDtEbBtRUqtTnSnIsDhttDEbBRrUsTSyIrD
//SIytsDrtDtEbBtRUqtTnSnIsDhttDEbBRrUsTSyIrD
