function flightSchedule(arr) {
  let flights = [];
  let value = arr[2];

  class Polet {
    constructor(code, destination, status) {
      this.code = code;
      this.destination = destination;
      this.status = status;
    }
  }

  for (const flight of arr[0]) {
    let [sector, desti, desti2] = flight.split(" ");
    if (desti2 !== undefined) {
      desti += " " + desti2;
    }
    flights.push(new Polet(sector, desti));
  }

  for (const status of arr[1]) {
    let [fligts, stat] = status.split(" ");
    flights.forEach((element) => {
      if (element.code === fligts) {
        element.status = stat;
      }
    });
  }

  if (value[0] === "Cancelled") {
    flights.forEach((element) => {
      if (element.status === "Cancelled") {
        console.log(
          `{ Destination: '${element.destination}', Status: '${element.status}' }`
        );
      }
    });
  } else {
    flights.forEach((element) => {
      if (element.status !== "Cancelled") {
        console.log(
          `{ Destination: '${element.destination}', Status: 'Ready to fly' }`
        );
      }
    });
  }
}

flightSchedule([
  [
    "WN269 Delaware",
    "FL2269 Oregon",
    "WN498 Las Vegas",
    "WN3145 Ohio",
    "WN612 Alabama",
    "WN4010 New York",
    "WN1173 California",
    "DL2120 Texas",
    "KL5744 Illinois",
    "WN678 Pennsylvania",
  ],
  [
    "DL2120 Cancelled",
    "WN612 Cancelled",
    "WN1173 Cancelled",
    "SK330 Cancelled",
  ],
  ["Ready to fly"],
]);
