function solve(input) {
  let arrayOfTickets = input
    .split(/\s*\s*/)
    .join("")
    .split(",");

  let winningTick = /[$@#^]{6,9}/gm;
  let jackpot = /([$@#^]{10})\1/gm;

  for (const ticket of arrayOfTickets) {
    if (ticket.length === 20) {
      let left = ticket.toString().substring(0, ticket.length / 2).match(winningTick);
      let right = ticket.toString().substring(ticket.length / 2).match(winningTick);

      if (jackpot.test(ticket)) {
        console.log(`ticket "${ticket}" - 10$ Jackpot!`);
      } else if ((left !== null) & (right !== null)) {
        console.log(`ticket "${ticket}" - ${left[0].length}${left[0][0]}`);
      } else {
        console.log(`ticket "${ticket}" - no match`);
      }
    } else {
      console.log("invalid ticket");
    }
  }
}

solve("$$$$$$$$$$$$$$$$$$$$, aabb , th@@@@@@eemo@@@@@@ey");
