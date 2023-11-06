function traveltime(arr) {
  let travelInformation = {};

  for (const destination of arr) {
    let [country, city, price] = destination.split(" > ");

    if (country in travelInformation) {
      if (city in travelInformation[country]) {
        let oldPrice = travelInformation[country][city];

        if (oldPrice > price) {
          travelInformation[country][city] = Number(price);
        }
      } else {
        travelInformation[country][city] = Number(price);
      }
    } else {
      travelInformation[country] = {};
      travelInformation[country][city] = Number(price);
    }
  }

  let sorted = Object.entries(travelInformation).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  

  sorted.forEach(([country, town]) =>{
  let finalString =  country + ` -> ` ;
  let sortedTowns = Object.entries(town).sort((a, b) => a[1] - b[1]);
  sortedTowns.forEach(([town, price]) => {
      finalString += `${town} -> ${price} `;
  });

  console.log(finalString.trim())});
}

traveltime([
  'Bulgaria > Sofia > 25000',
  'Bulgaria > Sofia > 25000',
  'Kalimdor > Orgrimar > 25000',
  'Albania > Tirana > 25000',
  'Bulgaria > Varna > 25010',
  'Bulgaria > Lukovit > 10'
  ]);
