let printText = function (text) {
  console.log(text);
};

printText("dobri");

function countDown(x) {
  console.log(x);
  if (x > 0) {
    countDown(x - 1);
  }
}

countDown(5);

// function without parameters
function printHeader() {
  console.log("~~~- {@} -~~~");
  console.log("~- Certificate -~");
  console.log("~~~- ~---~ -~~~");
}
printHeader(); // Output is always the same

function readFullName(firstName, lastName) {
  return firstName + " " + lastName;
}
const fullName = readFullName("John", "Smith");
console.log(fullName); //John Smith
