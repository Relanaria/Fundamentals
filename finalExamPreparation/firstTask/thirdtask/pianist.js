function solve(input) {
  let nuberOfPianists = Number(input.shift());

  let composers = {};

  for (let i = 0; i < nuberOfPianists; i++) {
    let [piece, composer, key] = input.shift().split("|");

    composers[piece] = {};
    composers[piece].composer = composer;
    composers[piece].key = key;
  }

  for (const token of input) {
    if (token.includes("Add")) {
      let [add_, piece, composer, key] = token.split("|");

      if (!composers.hasOwnProperty(piece)) {
        composers[piece] = {};
        composers[piece].composer = composer;
        composers[piece].key = key;
        console.log(
          `${piece} by ${composer} in ${key} added to the collection!`
        );
      } else {
        console.log(`${piece} is already in the collection!`);
      }
    } else if (token.includes("Remove")) {
      let [remove_, piece] = token.split("|");

      if (composers.hasOwnProperty(piece)) {
        console.log(`Successfully removed ${piece}!`);
        delete composers[piece];
      } else {
        console.log(
          `Invalid operation! ${piece} does not exist in the collection.`
        );
      }
    } else if (token.includes("ChangeKey")) {
      let [change_, piece, newKey] = token.split("|");

      if (composers.hasOwnProperty(piece)) {
        composers[piece].key = newKey;
        console.log(`Changed the key of ${piece} to ${newKey}!`);
      } else {
        console.log(
          `Invalid operation! ${piece} does not exist in the collection.`
        );
      }
    }
  }

  for (const [piece, obj] of Object.entries(composers)) {
    console.log(
      `${piece} -> Composer: ${composers[piece].composer}, Key: ${composers[piece].key}`
    );
  }
}

solve([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);
