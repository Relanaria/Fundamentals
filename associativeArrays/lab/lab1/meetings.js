function meet(arr) {
  let schedule = {};

  for (const token of arr) {
    let [day, name] = token.split(" ");

    if (schedule.hasOwnProperty(day)) {
      console.log(`Conflict on ${day}!`);
    } else {
      schedule[day] = name;
      console.log(`Scheduled for ${day}`);
    }
  }

  for (const [day, name] of Object.entries(schedule)) {
    console.log(day, "->", name);
  }
}

meet([
  "Friday Bob",
  "Saturday Ted",
  "Monday Bill",
  "Monday John",
  "Wednesday George",
]);
