function towns(arr) {
  let town = [];

  class towns {
    constructor(name, latitude, longitude) {
      this.name = name;
      this.latitude = Number(latitude).toFixed(2);
      this.longitude = Number(longitude).toFixed(2);
    }
  }

  for (const el of arr) {
    let [city, lati, long] = el.split("|");

    town.push(new towns(city, lati, long));
  }

  for (const key of town) {
    console.log(
      `{ town: '${key.name.trim()}', latitude: '${key.latitude}', longitude: '${key.longitude}' }`
    );
  }
}

towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
