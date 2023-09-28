function addAndRemove(arr) {
  let newArr = [];
  let index = 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "add") {
      newArr.push(index);
    } else {
      newArr.pop();
    }
    index++;
  }

  if (newArr.length === 0) {
    console.log("Empty");
  } else {
    console.log(newArr.join(" "));
  }
}

addAndRemove(["remove", "remove", "remove"]);
addAndRemove(["add", "add", "remove", "add", "add"]);
