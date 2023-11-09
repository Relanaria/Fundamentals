function army(arr) {
  let leader = {};

  for (const token of arr) {
    if (token.includes("arrives")) {
      let [firstName, lastName] = token.split(" ");
      if (lastName === "arrives") {
        leader[firstName] = {
          skill: 0,
        };
      } else {
        let fullName = firstName + " " + lastName;
        leader[fullName] = {
          skill: 0,
        };
      }
    } else if (token.includes(":")) {
      let [name, armyInfo] = token.split(": ");
      let [armyName, count] = armyInfo.split(", ");

      if (name in leader) {
        leader[name][armyName] = Number(count);
      }
    } else if (token.includes("+")) {
      let [amryName, count] = token.split(" + ");

      let entries = Object.entries(leader);

      for (const [key, value] of entries) {
        if (amryName in value) {
          leader[key][amryName] += Number(count);
        }
      }
    } else if (token.includes("defeated")) {
      let [leaderName, leaderLastname] = token.split(" ");

      if (leaderLastname !== "defeated") {
        delete leader[leaderName + " " + leaderLastname];
      } else {
        delete leader[leaderName];
      }
    }
  }

  let entries = Object.entries(leader);

  entries.forEach(([armyName, armies]) => {
    for (const [name, number] of Object.entries(armies)) {
      leader[armyName].skill += number;
    }
  });

  entries.sort((a, b) => b[1].skill - a[1].skill);

  for (const [leaderName, armies] of entries) {
    console.log(`${leaderName}: ${leader[leaderName].skill}`);

    const sortedArmies = Object.entries(armies)
      .filter(([armyName]) => armyName !== "skill")
      .sort((a, b) => b[1] - a[1]);

    for (const [armyName, soldiers] of sortedArmies) {
      console.log(`>>> ${armyName} - ${soldiers}`);
    }
  }
}

// army([
//   "Rick Burr arrives",
//   "Fergus: Wexamp, 30245",
//   "Rick Burr: Juard, 50000",
//   "Findlay arrives",
//   "Findlay: Britox, 34540",
//   "Wexamp + 6000",
//   "Juard + 1350",
//   "Britox + 4500",
//   "Porter arrives",
//   "Porter: Legion, 55000",
//   "Legion + 302",
//   "Rick Burr defeated",
//   "Porter: Retix, 3205",
// ]);

army([
  "Rick Burr arrives",
  "Findlay arrives",
  "Rick Burr: Juard, 1500",
  "Wexamp arrives",
  "Findlay: Wexamp, 34540",
  "Wexamp + 340",
  "Wexamp: Britox, 1155",
  "Wexamp: Juard, 43423",
]);
