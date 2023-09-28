function rotateArray(arr) {
  let rotationAmount = arr.pop();

  for (let i = 0; i < rotationAmount; i++) {
    const lastElement = arr.pop();
    arr.unshift(lastElement);
  }

  console.log(arr.join(" "));
}

rotateArray(["1", "2", "3", "4", "2"]);
rotateArray(["Banana", "Orange", "Coconut", "Apple", "15"]);
