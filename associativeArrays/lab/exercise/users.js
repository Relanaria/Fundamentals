function usersers(arr) {
  let companyUsers = {};

  for (const token of arr) {
    let [company, iD] = token.split(" -> ");

    if (!companyUsers[company]) {
      companyUsers[company] = new Set([iD]);
    } else {
      companyUsers[company].add(iD);
    }
  }

  let sortedCompanies = Object.keys(companyUsers).sort((a, b) =>
    a.localeCompare(b)
  );

  for (const keys of sortedCompanies) {
    console.log(keys);
    for (const id of companyUsers[keys]) {
      console.log(`-- ${id}`);
    }
  }
}

usersers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]
    );
