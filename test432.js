function nether(str) {
  let regHealth = /[^0-9.^\/+\-*]/g;
  let sumPattern = /([+|-]?\d+[.]?\d+|[+|-]?\d+)/g;
  let dmgPattern = /(\*|\/)/g;
  let demons = {};

  str.split(/[, ]+/g).forEach((demon) => {
    demons[demon] = {};
    demons[demon].health = demon
      .match(regHealth)
      .reduce((sum, char) => sum + char.charCodeAt(0), 0);

    let digits = demon.match(sumPattern) ?? [];
    demons[demon].damage = digits.reduce(
      (sum, digit) => sum + Number(digit),
      0
    );

    let operands = demon.match(dmgPattern) ?? [];
    operands.forEach((operand) => {
      if (operand === "*") {
        demons[demon].damage *= 2;
      } else {
        demons[demon].damage /= 2;
      }
    });
  });

  Object.entries(demons)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .forEach(([name, valuesObj]) => {
      console.log(
        `${name} - ${valuesObj.health} health, ${valuesObj.damage.toFixed(
          2
        )} damage`
      );
    });
}

nether("M3ph1st0.4**, Azazel");
