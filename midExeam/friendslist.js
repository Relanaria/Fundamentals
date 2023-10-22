function friendsList(arr) {
  let friends = arr.shift().split(", ");
  let blacklistedCount = 0;
  let lostNamesCount = 0;

  for (const element of arr) {
    let [command, idexName, newName] = element.split(" ");

    if (command === "Report") {
      console.log(`Blacklisted names: ${blacklistedCount}`);
      console.log(`Lost names: ${lostNamesCount}`);
      console.log(friends.join(" "));
      return;
    }

    switch (command) {
      case "Blacklist":
        let index = friends.indexOf(idexName);

        if (index !== -1) {
          friends[index] = "Blacklisted";
          console.log(`${idexName} was blacklisted.`);
          blacklistedCount++;
        } else {
          console.log(`${idexName} was not found.`);
        }

        break;
      case "Error":
        if (idexName >= 0 && idexName < friends.length) {
          if (
            friends[idexName] !== "Blacklisted" &&
            friends[idexName] !== "Lost"
          ) {
            console.log(`${friends[idexName]} was lost due to an error.`);
            friends[idexName] = "Lost";
            lostNamesCount++;
          }
        }
        break;

      case "Change":
        if (idexName >= 0 && idexName < friends.length) {
          let temp = friends[idexName];
          console.log(`${temp} changed his username to ${newName}.`);
          friends[idexName] = newName;
        }
        break;
    }
  }
}

friendsList([
  "Mike, John, Eddie, William",

  "Blacklist Maya",

  "Error 1",

  "Change 4 George",

  "Report",
]);
