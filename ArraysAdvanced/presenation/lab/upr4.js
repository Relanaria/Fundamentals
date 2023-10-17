function sorting(arr) {
  let sortedArr = arr.sort((a, b) => {
    return a - b;
  });
  let newArangedArr = [];
  let length = sortedArr.length / 2;

  for (let i = 0; i < length; i++) {
    newArangedArr.push(sortedArr.pop(),sortedArr.shift());
  }

  console.log(newArangedArr.join(" "));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
