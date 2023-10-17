function blackFlag(arr) {
  let daysForPlunder = Number(arr.shift());
  let dailyPlunder = Number(arr.shift());
  let expectedPlunder = Number(arr.shift());
  let totalPlunder = 0;

  for (let i = 1; i <= daysForPlunder; i++) {
    totalPlunder += dailyPlunder;

    if (i % 3 === 0) {
      totalPlunder += dailyPlunder * 0.5;
    } 
    if (i % 5 === 0) {
      totalPlunder -= totalPlunder * 0.3;
    }
  }

  if (totalPlunder >= expectedPlunder) {
    console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
  } else {
    let percentage = (totalPlunder / expectedPlunder) * 100;
    console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
  }
}

blackFlag(["10", "20", "380"]);
