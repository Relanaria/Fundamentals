function oddEven(arr) {
  let even = 0;
  let odd = 0;

  for (let num of arr) {
    if (num % 2 === 0) {
      even += num;
    } else {
      odd += num;
    }
  }

  console.log(even - odd);
}

oddEven([1, 2, 3, 4, 5, 6]);
oddEven([3, 5, 7, 9]);
oddEven([2, 4, 6, 8, 10]);
