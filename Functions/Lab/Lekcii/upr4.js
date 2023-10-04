function printCertificat(grade, arr) {
  let x = grade;
  let status = formatGrade(x);

  if (status === "Fail") {
    console.log("Student does not qualify");
  } else {
    console.log(`Pass ${arr[0]} ${arr[1]}`);
  }

  function formatGrade(n) {
    if (n < 3) {
      return (`Fail`);
    } else if (n < 3.5) {
      return (`Poor`);
    } else if (n < 4.5) {
      return `Good`;
    } else if (n < 5.5) {
      return (`Very good`);
    } else {
      return (`Excellent`);
    }
  }
}

printCertificat(5, ["Ivan", "Dobrev"])