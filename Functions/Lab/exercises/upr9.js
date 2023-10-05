function loadingBar(percentage) {
  let barCountainer = [];
  let count = 0;

  if (percentage != 100) {
    for (let i = 0; i < percentage / 10; i++) {
      barCountainer.push("%");
      count++;
    }

    for (let j = count; j < 10; j++) {
      barCountainer.push(".");
    }
  } else {
    for (let i = 0; i < percentage / 10; i++) {
      barCountainer.push("%");
    }
  }

  if (percentage === 100) {
    console.log("100% Complete!");
    console.log(`[${barCountainer.join("")}]`);
  } else {
    console.log(`${percentage}% [${barCountainer.join("")}]`);
    console.log("Still loading...");
  }
}

loadingBar(80);
