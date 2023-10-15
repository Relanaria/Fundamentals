function receptionProblem(arr) {
  let studentsAnsweredPerHour =
    Number(arr.shift()) + Number(arr.shift()) + Number(arr.shift());
  let numberOfStudents = Number(arr.shift());
  let hour = 0;

  while (numberOfStudents > 0) {
    hour++;

    if (hour % 4 === 0) {
      continue;
    } else {
      numberOfStudents -= studentsAnsweredPerHour;
    }

    if (numberOfStudents < 0) {
      numberOfStudents = 0;
    }
  }

  console.log(`Time needed: ${hour}h.`);
}

receptionProblem(['3','2','5','40'] );
