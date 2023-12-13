function solve(input) {
  let targets = {};
  let pattern = /\w+/gm;

  let city = input.shift();

  for (let i = 0; i < input.length; i++) {
    if (city.includes("Sail")) {
      break;
    }

    let [target, population, gold] = city.split("||");

    if (targets.hasOwnProperty(target)) {
      targets[target].population += Number(population);
      targets[target].gold += Number(gold);
    } else {
      targets[target] = {};
      targets[target].population = Number(population);
      targets[target].gold = Number(gold);
    }

    city = input.shift();
  }

  for (const token of input) {
    let match = token.split("=>");

    if (match.includes("Plunder")) {

      console.log(
        `${match[1]} plundered! ${match[3]} gold stolen, ${match[2]} citizens killed.`
      );

      targets[match[1]].population -= Number(match[2]);
      targets[match[1]].gold -= Number(match[3]);

      if (targets[match[1]].population <= 0 || targets[match[1]].gold <= 0) {
        console.log(`${match[1]} has been wiped off the map!`);
        delete targets[match[1]];
      }
    } else if (match.includes("Prosper")) {

      if (Math.sign(match[2]) !== -1) {
        targets[match[1]].gold += Number(match[2]);

        console.log(
          `${match[2]} gold added to the city treasury. ${match[1]} now has ${
            targets[match[1]].gold
          } gold.`
        );

      } else {
        console.log(`Gold added cannot be a negative number!`);
      }
    }
  }

  if(Object.keys(targets).length !== 0){
    console.log(`Ahoy, Captain! There are ${Object.keys(targets).length} wealthy settlements to go to:`);
    for (const target of Object.entries(targets)) {
        console.log(`${target[0]} -> Population: ${targets[target[0]].population} citizens, Gold: ${targets[target[0]].gold} kg`);
        
    }

  }else{
    console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
  }
}

solve(["Nassau||95000||1000", 

"San Juan||930000||1250", 

"Campeche||270000||690", 

"Port Royal||320000||1000", 

"Port Royal||100000||2000", 

"Sail", 

"Prosper=>Port Royal=>-200", 

"Plunder=>Nassau=>94000=>750", 

"Plunder=>Nassau=>1000=>150", 

"Plunder=>Campeche=>150000=>690", 

"End"]) ;
