function printNelement(arr) {
  let step = Number(arr.pop());
  let newArr = [];

  for (let i = 0; i < arr.length; i += step) {
    newArr.push(arr[i]);
  }

  console.log(newArr.join(" "));
}

printNelement(["5", "20", "31", "4", "20", "2"]);
printNelement(["dsa", "asd", "test", "test", "2"]);
