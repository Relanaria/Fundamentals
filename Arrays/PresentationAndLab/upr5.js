function arr(input) {
  
  let output = "";
  for (let number of input) {
  output += `${number} `;
  }

  console.log(output);

}

arr([1, 2, 3, 4, 5]);
