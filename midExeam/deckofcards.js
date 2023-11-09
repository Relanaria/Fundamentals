function deckOfCards(arr) {
  let deck = arr.shift().split(", ");
  let n = +arr.shift();
  let count = 0;
  let index = 0;

  for (const doTo of arr) {
    let [command, indexName, cardName] = doTo.split(", ");

    count++;

    switch (command) {
      case "Add":
        if (deck.includes(indexName)) {
          console.log("Card is already in the deck");
        } else {
          deck.push(indexName);
          console.log("Card successfully added");
        }
        break;

      case "Remove":
        if (deck.includes(indexName)) {
          let index = deck.indexOf(indexName);
          deck.splice(index, 1);
          console.log("Card successfully removed");
        } else {
          console.log("Card not found");
        }

        break;

      case "Remove At":
        index = Number(indexName);
        if (index >= 0 && index < deck.length) {
          deck.splice(index, 1);
          console.log("Card successfully removed");
        } else {
          console.log("Index out of range");
        }
        break;

      case "Insert":
        index = Number(indexName);
        if (index >= 0 && index < deck.length) {
          if (deck.includes(cardName)) {
            console.log("Card is already added");
          } else {
            deck.splice(index, 0, cardName);
            console.log("Card successfully added");
          }
        } else {
          console.log("Index out of range");
        }
        break;
    }
  }
  console.log(deck.join(", "));
}

deckOfCards([
  "Ace of Diamonds, Queen of Hearts, King of Clubs",

  "3",

  "Dobri, 3",

  "Add, King of Diamonds",

  "Insert, 2, Queen of Hearts",

  "Remove, Ace of Diamonds",
]);
