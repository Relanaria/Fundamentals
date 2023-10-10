function searchForAnumber(array, array2) {
  //[5, 2, 3, 4, 1, 6]
  let newArray = takeElements(array, array2[0]);

  //[5, 2, 3, 4, 1]

  deleteElements(newArray, array2[1]);

  //[3, 4, 1]

  let count = getOccurrence(newArray, array2[2]);

  console.log(`Number ${array2[2]} occurs ${count} times.`);

  function takeElements(array, number) {
    let takenElements = array.slice(0, number);

    return takenElements;
  }

  function deleteElements(array, number) {
    array.splice(0, number);

    return array;
  }

  function getOccurrence(array, value) {
    let count = 0;
    array.forEach((v) => v === value && count++);
    return count;
  }
}

// searchForAnumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchForAnumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);
