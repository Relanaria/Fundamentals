function nether(str) {
  let regHealth = /[^0-9.\\/+*-]/g;
  let sumPattern = /([+|-]?[0-9]+[.]*?[0-9]+|[+|-]?[0-9]+)/g;
  let dmgPattern = /(\*|\/)/g;
  let deamons = str.split(/[, ]+/g);
  let demons = {};

  for (const demon of deamons) {
    demons[demon] = {};
    let hp = health(demon);
    demons[demon]["health"] = hp;

    let dmg = damage(demon);
    demons[demon]["damage"] = dmg;
  }

  let sorted = Object.entries(demons).sort((a, b) => a[0].localeCompare(b[0]));
  for (const [name, valuesObj] of sorted) {
    console.log(
      `${name} - ${valuesObj["health"]} health, ${valuesObj["damage"].toFixed(
        2
      )} damage`
    );
  }

  function health(name) {
    let hp = 0;
    for (let i = 0; i < name.length; i++) {
      if (name[i].match(regHealth)) {
        hp += name[i].charCodeAt(0);
      }
    }
    return hp;
  }

  function damage(input) {
    let dmg = 0;
    let digits = input.match(sumPattern);

    if (digits != null) {
      for (const digit of digits) {
        dmg += Number(digit);
      }
    }

    let subtractOrMultiply = input.match(dmgPattern);

    if (subtractOrMultiply != null) {
      for (const operand of subtractOrMultiply) {
        if (operand == "*") {
          dmg *= 2;
        } else {
          dmg /= 2;
        }
      }
    }

    return dmg;
  }
}
nether("M3ph1st0**, Azazel");
