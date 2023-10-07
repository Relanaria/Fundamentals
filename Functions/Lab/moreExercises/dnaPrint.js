function printDNA(number) {
  let dnaSequence = ["A", "T", "C", "G", "T", "T", "A", "G", "G", "G"];
  
  let dnaHelixLeftSide = "";
  let dnaHelixRigthSide = "";

  for (let i = 1; i < number + 1; i++) {
    dnaHelixLeftSide = dnaSequence.shift();
    dnaHelixRigthSide = dnaSequence.shift();

    if (i === 1 || i % 4 === 1) {
      console.log(`**${dnaHelixLeftSide}${dnaHelixRigthSide}**`);
    } else if (i === 2 || i % 4 === 2) {
      console.log(`*${dnaHelixLeftSide}--${dnaHelixRigthSide}*`);
    } else if (i === 3 || i % 4 === 3) {
      console.log(`${dnaHelixLeftSide}----${dnaHelixRigthSide}`);
    } else if (i === 4 || i % 4 === 0) {
      console.log(`*${dnaHelixLeftSide}--${dnaHelixRigthSide}*`);
    }

    dnaSequence.push(dnaHelixLeftSide);
    dnaSequence.push(dnaHelixRigthSide);
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
