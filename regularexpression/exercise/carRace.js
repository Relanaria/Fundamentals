function solver(input) {
  let participants = {};
  let names = input.shift().split(", ");
  let letters = /^[a-zA-Z]+$/;
  let numbers = /^\d+$/;

  for (const name of names) {
    participants[name] = 0;
  }

  for (const distance of input) {
    let name = "";
    let dist = 0;

    for (let i = 0; i < distance.length; i++) {
      if (letters.test(distance[i])) {
        name += distance[i];
      } else if (numbers.test(distance[i])) {
        dist += Number(distance[i]);
      }
    }

    if (name in participants) {
      if (participants[name] !== 0) {
        participants[name] += dist;
      } else {
        participants[name] = dist;
      }
    }
  }

  let final = Object.entries(participants).sort((a, b) => b[1] - a[1]);

  console.log(`1st place: ${final[0][0]}`);
  console.log(`2nd place: ${final[1][0]}`);
  console.log(`3rd place: ${final[2][0]}`);
}

solver(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
'Mi*&^%$ch123o!#$%#nne787) ',
'%$$B(*&&)i89ll)*&) ',
'R**(on%^&ald992) ',
'T(*^^%immy77) ',
'Ma10**$#g0g0g0i0e',
'end of race']
);
