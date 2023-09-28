function magicNum(arr, n) {
  for (let i = 0; i < arr.length - 1; i++) {
    let a = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      let sum = a + arr[j];

      if (sum == n) {
        console.log(`${a} ${arr[j]}`);
      }
    }
  }
}

magicNum([1, 7, 6, 2, 19, 23],
    8)
    
