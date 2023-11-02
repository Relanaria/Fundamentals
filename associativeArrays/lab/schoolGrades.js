function grades(arr) {
  let studentsGrades = new Map();
  let sum = 0;

  for (const student of arr) {
    let [name, ...grades] = student.split(" ");

    if (studentsGrades.hasOwnProperty(name)) {
      studentsGrades[name].push(...grades);
    } else {
      studentsGrades[name] = grades;
    }
  }

  studentToArr = Object.entries(studentsGrades).sort((a, b) =>a[0].localeCompare(b[0]));
  let sortedStudents = Object.fromEntries(studentToArr);

  for (const final in sortedStudents) {
    for (let i = 0; i < sortedStudents[final].length; i++) {
      sum += Number(sortedStudents[final][i]);
    }

    let averageSum = (sum / sortedStudents[final].length).toFixed(2);
    console.log(`${final}: ${averageSum}`);
    sum = 0;
  }
}

grades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
