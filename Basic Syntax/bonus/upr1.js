function sorting(num1, num2, num3) {
  let arr = [num1, num2, num3];
  for (let i = 0; i < arr.length; i++) {
    //Inner pass
    for (let j = 0; j < arr.length - i - 1; j++) {
      //Value comparison using ascending order

      if (arr[j + 1] < arr[j]) {
        //Swapping
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }

  arr.reverse();
  for (let i = 0; i < arr.length; i++) {
    let number = arr[i];
    console.log(number);
  }
}

sorting(3, 1, 2);
