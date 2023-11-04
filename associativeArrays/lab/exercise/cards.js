function cards(arr) {
  let players = {};
  let cardsMapper = {
    p: {
      J: 11,

      Q: 12,

      K: 13,

      A: 14,
    },

    t: {
      S: 4,

      H: 3,

      D: 2,

      C: 1,
    },
  };

  for (const cards of arr) {
    let [name, card] = cards.split(": ");

    if (!players[name]) {
      players[name] = new Set(card.split(", "));
    } else {
      card.split(", ").forEach((card) => {
        players[name].add(card);
      });
    }
  }

  Object.keys(players).forEach((key) => {
    console.log(`${key}: ${totalPower(players[key])}`);
  });

  function totalPower(cardSet) {
    let totalSum = 0;

    cardSet.forEach((card) => {
      let tokens = card.split("");
      let color = tokens.pop();
      let value = tokens.join("");

      let p = 0;

      if (!cardsMapper.p[value]) {
        p = Number(value);
      } else {
        p = cardsMapper.p[value];
      }

      totalSum += p * cardsMapper.t[color];
    });
    return totalSum;
  }
}

cards([
  "Peter: 2C, 4H, 9H, AS, QS",
  "Tomas: 3H, 10S, JC, KD, 5S, 10S",
  "Andrea: QH, QC, QS, QD",
  "Tomas: 6H, 7S, KC, KD, 5S, 10C",
  "Andrea: QH, QC, JS, JD, JC",
  "Peter: JD, JD, JD, JD, JD, JD",
]);
