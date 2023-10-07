function printDNA(number) {
  let combinations = ["A", "T", "C", "G", "T", "T", "A", "G", "G", "G"];
  let dnaHolder1 = "";
  let dnaHolder2 = "";

  for (let i = 1; i < number + 1; i++) {
    dnaHolder1 = combinations.shift();
    dnaHolder2 = combinations.shift();

    if (i === 1 || i % 4 === 1) {
      console.log(`**${dnaHolder1}${dnaHolder2}**`);
    } else if (i === 2 || i % 4 === 2) {
      console.log(`*${dnaHolder1}--${dnaHolder2}*`);
    } else if (i === 3 || i % 4 === 3) {
      console.log(`${dnaHolder1}----${dnaHolder2}`);
    } else if (i === 4 || i % 4 === 0) {
      console.log(`*${dnaHolder1}--${dnaHolder2}*`);
    }

    combinations.push(dnaHolder1);
    combinations.push(dnaHolder2);
  }
}

printDNA(10);

// **AT**
// *C--G*
// T----T
// *A--G*
// **GG**

// **AT**
// *C--G*
// T----T
// *A--G*
// **GG**
// *A--T*
// C----G
// *T--T*
// **AG**
// *G--G*
