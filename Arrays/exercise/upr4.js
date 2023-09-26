function arrayRotation(arr, n) {
  let take = 0;
  for (let i = 0; i < n; i++) {
    take = arr.shift();
    arr.push(take);
  }

  console.log(arr.join(' '));
}

arrayRotation([2, 4, 15, 31], 5);
