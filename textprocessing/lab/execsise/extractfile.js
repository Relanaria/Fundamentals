function solve(str) {
  let arr = str.split("\\");
  let file = arr.pop();

  console.log(`File name: ${file.substring(0, file.lastIndexOf("."))}`);
  console.log(`File extension: ${file.substring(file.lastIndexOf(".") + 1)}`);
}
solve("C:\\Projects\\Data-Structures\\LinkedList.bak.cs");
