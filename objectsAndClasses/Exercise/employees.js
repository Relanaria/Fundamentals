function employees(arr) {
  let employees = [];

  class employe {
    constructor(name, nameLength) {
      this.name = name;
      this.nameLength = nameLength;
    }
  }

  for (const name of arr) {
    let number = name.length;
    employees.push(new employe(name, number));
  }

  for (const key of  employees) {
    console.log(`Name: ${key.name} -- Personal Number: ${key.nameLength}`);
  }
}

// employees.forEach((key) =>
//     console.log(`Name: ${key.name} -- Personal Number: ${key.lengthName}`)
//   );

employees(["Samuel Jackson", "Will Smith", "Bruce Willis", "Tom Holland"]);
