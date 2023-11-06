function wow(str) {
  let winner = "";
  let items = {
    shards: 0,
    fragments: 0,
    motes: 0,
  };

  let junk = {};

  let material = str.split(" ");

  for (let i = 0; i < material.length; i += 2) {
    let quantity = Number(material[i]);
    let item = material[i + 1].toLowerCase();

    if (item === "shards" || item === "fragments" || item === "motes") {
      items[item] += quantity;

      if (items[item] >= 250 && item === "shards") {
        winner = "Shadowmourne";
        items[item] -= 250;
        break;
      } else if (items[item] >= 250 && item === "fragments") {
        winner = "Valanyr";
        items[item] -= 250;
        break;
      } else if (items[item] >= 250 && item === "motes") {
        winner = "Dragonwrath";
        items[item] -= 250;
        break;
      }
      continue;
    }
    if (junk.hasOwnProperty(item)) {
      junk[item] += quantity;
    } else {
      junk[item] = quantity;
    }
  }

  junk = Object.fromEntries(
    Object.entries(junk).sort((a, b) => a[0].localeCompare(b[0]))
  );

  items = Object.fromEntries(
    Object.entries(items).sort((a, b) => {
      if (a[1] === b[1]) {
        return a[0].localeCompare(b[0]);
      }

      return b[1] - a[1];
    })
  );

  console.log(`${winner} obtained!`);

  for (const [items1, qanty] of Object.entries(items)) {
    console.log(`${items1}: ${qanty}`);
  }

  for (const [junk1, quanty] of Object.entries(junk)) {
    console.log(`${junk1}: ${quanty}`);
  }
}

wow(
  "123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver"
);
