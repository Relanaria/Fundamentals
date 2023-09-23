function rightplace(str, char, match) {
  let res = str.replace("_", char);

  let output = res === match ? "Matched" : "Not Matched";

  console.log(output);
}

rightplace('Str_ng', 'I', 
'Strong');
rightplace('Str_ng', 'i', 
'String' );
