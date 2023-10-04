function charectersInrange(char1, char2) {
  let startingPoint = char1.charCodeAt(0);
  let endingPoint = char2.charCodeAt(0);
  let stringOfCharacters = "";

  
    for (let i = Math.min(endingPoint,startingPoint) + 1; i < Math.max(startingPoint,endingPoint); i++) {
      stringOfCharacters += String.fromCharCode(i) + " ";
    }
  

  console.log(stringOfCharacters);
}

charectersInrange("C", "#");
charectersInrange("a", "d")
