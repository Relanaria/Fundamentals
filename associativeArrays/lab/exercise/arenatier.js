function arena(arr) {
  let gladiators = {};
  const regex = /[!@#$%^&*()\-+={}[\]:;"'<>,.?/|\\]/;
  let lostCheck = false;

  for (const token of arr) {
    if (token === "Ave Cesar") {
      break;
    }
    if (regex.test(token)) {
      let [glad, tech, power] = token.split(" -> ");

      if (!gladiators.hasOwnProperty(glad)) {
        gladiators[glad] = {};
        gladiators[glad][tech] = Number(power);
      } else {
        if (tech in gladiators[glad]) {
          let curPower = gladiators[glad][tech];
          if (curPower < power) {
            gladiators[glad][tech] = Number(power);
          }
        } else {
          gladiators[glad][tech] = Number(power);
        }
      }
    } else {
      let [name, name2] = token.split(" vs ");

      if (gladiators.hasOwnProperty(name) && gladiators.hasOwnProperty(name2)) {
        let glad1 = Object.entries(gladiators[name]);
        let glad2 = Object.entries(gladiators[name2]);

        for (const [tech, power] of glad1) {
          if (lostCheck) {
            break;
          }
          for (const [tech1, power1] of glad2) {
            if (tech === tech1) {
              if (power > power1) {
                delete gladiators[name2];
                lostCheck = true;
              } else {
                delete gladiators[name];
                lostCheck = true;
              }
            }
          }
        }
      }
    }
  }

  addSkillProperty(gladiators);

  const sortedEntries = Object.entries(gladiators).sort(
    (a, b) => b[1].skill - a[1].skill || a[0].localeCompare(b[0])
  );

  gladiators = Object.fromEntries(sortedEntries);

  for (const [gladi, skills] of Object.entries(gladiators)) {
    console.log(`${gladi}: ${gladiators[gladi].skill} skill`);

    const sortedSkills = Object.entries(skills).sort(
      (a, b) => b[1] - a[1] || a[0].localeCompare(b[0])
    );

    for (const [skill, skillValue] of sortedSkills) {
      if (skill !== "skill") {
        console.log(`- ${skill} <!> ${skillValue}`);
      }
    }
  }

  function addSkillProperty(characters) {
    for (const characterName in characters) {
      if (characters.hasOwnProperty(characterName)) {
        const skills = characters[characterName];
        let totalPower = 0;

        for (const skill in skills) {
          totalPower += skills[skill];
        }

        characters[characterName].skill = totalPower;
      }
    }
  }
}

arena([
  "Peter -> Duck -> 400",
  "Julius -> Shield -> 150",
  "Gladius -> Heal -> 200",
  "Gladius -> Support -> 250",
  "Gladius -> Shield -> 250",
  "Peter vs Gladius",
  "Gladius vs Julius",
  "Gladius vs Maximilian",
  "Ave Cesar",
]);
