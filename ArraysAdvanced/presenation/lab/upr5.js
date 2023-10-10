function sortByCriteria(arr) {
  arr.sort(comparison);

  console.log(arr.join("\n"));

  function comparison(a, b) {
    let lengthComparison = a.length - b.length;

    if (lengthComparison !== 0) {
      return lengthComparison;
    }

    return a.localeCompare(b, 'en', { sensitivity: "base" });
  }
}

sortByCriteria(["alpha", "beta", "gamma"]);

// sortByCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);

sortByCriteria(["test", "Deny", "omen", "Default"]);
