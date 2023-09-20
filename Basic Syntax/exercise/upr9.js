function login(array) {
  let username = array[0];
  let count = 1;

  let splitString = username.split("");
  let reverse = splitString.reverse();
  let joinArray = reverse.join("");

  for (let index = 1; index < array.length; index++) {
    if (array[index] === joinArray) {
      console.log(`User ${username} logged in.`);
      break;
    } else if (count > 3) {
      console.log(`User ${username} blocked!`);
      break;
    } else {
      console.log("Incorrect password. Try again.");
    }
    count++;
  }
}

login(["Acer", "login", "go", "let me in", "recA"]);
