function addSubtract(arr) {
  let originalSum = 0;
  let modifiesSum = 0;
  for (let i = 0; i < arr.length; i++) {
    originalSum += arr[i];
    if (arr[i] % 2 === 0) {
      arr[i] = arr[i] + i;
    } else {
      arr[i] = arr[i] - i;
    }
 
    modifiesSum += arr[i];
  }

  console.log(arr);
  console.log(originalSum);
  console.log(modifiesSum);
}

addSubtract([-5, 11, 3, 0, 2]);
