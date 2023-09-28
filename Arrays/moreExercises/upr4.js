function NonDecreasingSubset(arr) {
  let curentBigest = arr[0];
  let result = arr.filter((num) => {
    if (curentBigest <= num) {
      curentBigest = num;
      return true;
    }
    return false;
  });

  console.log(result.join(" "));
}

NonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
NonDecreasingSubset([1, 2, 3, 4]);
NonDecreasingSubset([20, 3, 2, 15, 6, 1]);

// let curentBigest = arr.shift();
// let newArr = [];
// newArr.push(curentBigest);

// for (let i = 0; i < arr.length; i++) {
//   if (curentBigest <= arr[i]) {
//     newArr.push(arr[i]);
//     curentBigest = arr[i]
//   }
// }

// console.log(newArr.join(" "));
