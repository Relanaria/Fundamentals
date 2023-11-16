function solve(input) {
  let cryptedMessage = input.shift();

  for (const token of input) {
    if (token.includes("ChangeAll")) {
      let [comand_, toChange, letter] = token.split("|");
      while (cryptedMessage.includes(toChange)) {
        cryptedMessage = cryptedMessage.replace(toChange, letter);
      }
    } else if (token.includes("Move")) {
      let [move, position] = token.split("|");
      cryptedMessage =
        cryptedMessage.substring(Number(position)) +
        cryptedMessage.substring(0, Number(position));
    } else if (token.includes("Insert")) {
      let [insert, index, value] = token.split("|");
      let temp = cryptedMessage.split("");
      temp.splice(index, 0, value);
      cryptedMessage = temp.join("");
    }
  }

  console.log(`The decrypted message is: ${cryptedMessage}`);
}

solve(["owyouh", "Move|2", "Move|3", "Insert|3|are", "Insert|9|?", "Decode"]);
