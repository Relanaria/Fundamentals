function bonusScoringSystem(arr) {
  let transformedArr = arr.map(Number);

  transformedArr.shift();
  let totalNumberOfLectures = transformedArr.shift();
  let additionalBonusLectures = transformedArr.shift();
  let maxBonusPoints = 0;
  let studentAtendance = 0;

  for (let atendance of transformedArr) {
    let totalBonus = (atendance / totalNumberOfLectures) * (5 + additionalBonusLectures);

    if (totalBonus > maxBonusPoints) {
      maxBonusPoints = totalBonus;
      studentAtendance = atendance;
    }
  }

  console.log(`Max Bonus: ${Math.ceil(maxBonusPoints)}.`);
  console.log(`The student has attended ${studentAtendance} lectures.`);
}

bonusScoringSystem([
  "10",
  "30",
  "14",
  "8",

  "23",
  "27",
  "28",
  "15",

  "17",
  "25",
  "26",
  "5",

  "18",
]);
