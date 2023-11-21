function solve(input) {
  let stops = input.shift();

  for (const token of input) {
    if (token.includes("Add Stop")) {
      let [add_, index, str] = token.split(":");

      if (index < stops.length) {
        stops = stops.substring(0, index) + str + stops.substring(index);
      }
      console.log(stops);
    } else if (token.includes("Remove Stop")) {
      let [stop_, startIndex, endIndex] = token.split(":");

      if (startIndex >= 0 && endIndex < stops.length) {
        stops =
          stops.substring(0, Number(startIndex)) +
          stops.substring(Number(endIndex) + 1);
      }
      console.log(stops);
    } else if (token.includes("Switch")) {
      let [swich_, replace, country] = token.split(":");

      if (stops.includes(replace)) {
        stops = stops.replace(replace, country);
      }
      console.log(stops);
    } else if (token.includes("Travel")) {
      console.log(`Ready for world tour! Planned stops: ${stops}`);
    }
  }
}

solve([
  "Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel",
]);
