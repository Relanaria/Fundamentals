function party(arr) {
  let reservationList = {};

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "PARTY") {
      break;
    }
    let guest = arr.shift();

    if (isNumber(guest[0])) {
      reservationList[guest] = "VIP";
    } else {
      reservationList[guest] = "guest";
    }
  }

  arr.shift();
  for (const item of arr) {
    for (const [name, status] of Object.entries(reservationList)) {
      if (item === name) {
        delete reservationList[name];
      }
    }
  }

  console.log(Object.keys(reservationList).length);
  let entries = Object.entries(reservationList);
  let sorted = entries.sort((a, b) => a[1] - b[1]);
  let final = Object.fromEntries(sorted);

  for (const key in final) {
    console.log(key);
  }

  function isNumber(char) {
    return /^\d$/.test(char);
  }
}

party([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);
