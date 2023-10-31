function solve(arr) {
  let students = [];
  let str = arr.map((x) => x.split(", "));
  let lastGrade;
  
  class Stud {
    constructor(name, grade, score) {
      this.name = name;
      this.grade = grade;
      this.score = score;
    }
  }

  for (const element of str) {
    let name = element[0].split(": ")[1];
    let grade = Number(element[1].split(': ')[1]) + 1;
    let averageScore = element[2].split(': ')[1];
    if (averageScore >= 3) {
      students.push(new Stud(name, grade, averageScore));
    }
  }

  students.sort((a, b) => {return a.grade - b.grade;});

  students.forEach((el) => {
    let currentGrade = el.grade;
    let average1 = 0;
    let studCount = 0;
    let peoplePassed = [];

    if (currentGrade !== lastGrade) {
      console.log(`${currentGrade} Grade`);
      students.forEach((average) => {
        if (average.grade === currentGrade) {
          average1 += average.score;
          studCount++;
          peoplePassed.push(average.name);
        }
      });
      console.log(`List of students: ${peoplePassed.join(", ")}`);
      console.log(`Average annual score from last year: ${(average1 / studCount).toFixed(2)}`);
      console.log();
    }
    lastGrade = currentGrade;
  });
}

solve([
  "Student name: George, Grade: 5, Graduated with an average score: 2.75",
  "Student name: Alex, Grade: 9, Graduated with an average score: 3.66",
  "Student name: Peter, Grade: 8, Graduated with an average score: 2.83",
  "Student name: Boby, Grade: 5, Graduated with an average score: 4.20",
  "Student name: John, Grade: 9, Graduated with an average score: 2.90",
  "Student name: Steven, Grade: 2, Graduated with an average score: 4.90",
  "Student name: Darsy, Grade: 1, Graduated with an average score: 5.15",
]);
