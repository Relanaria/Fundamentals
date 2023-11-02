function picoloo(arr) {
  let parkingLot = {};

  for (const token of arr) {
    let [direction, carNumber] = token.split(", ");

    if (direction === "IN") {
      let joinedArr = carNumber.split("");
      let number = joinedArr.splice(2, 4).join("");
      number = +number;
      parkingLot[carNumber] = number;
    } else {
      if (parkingLot.hasOwnProperty(carNumber)) {
        delete parkingLot[carNumber];
      }
    }
  }

  let entries = Object.entries(parkingLot);
  let sorted = entries.sort((a, b) => a[1] - b[1]);
  let final = Object.fromEntries(sorted);

  if (JSON.stringify(final) === "{}") {
    console.log("Parking Lot is Empty");
  } else {
    for (const key in final) {
      console.log(key);
    }
  }
}

picoloo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU',]
);
