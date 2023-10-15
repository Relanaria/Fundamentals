function modifyElements(arr) {
  let transformedArray = arr.shift().split(" ").map(Number);

  for (const command of arr) {
    let [toDo, index1, index2] = command.split(" ");
    if (toDo === "end") {
      break;
    }

    switch (toDo) {
      case "swap":
        swap(transformedArray, Number(index1), Number(index2));
        break;

      case "multiply":
        multiply(transformedArray, Number(index1), Number(index2))

        break;
      case "decrease":
        transformedArray = transformedArray.map((x) => x - 1);
        break;
    }
  }
  console.log(transformedArray.join(", "));

  function swap(array, index1, index2) {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
  }

  function multiply(array,index1,index2){
    let temp = array[index1];
    array[index1] = temp * array[index2];
  }
}

modifyElements([ 

    '1 2 3 4', 
  
    'swap 0 1', 
  
    'swap 1 2', 
  
    'swap 2 3', 
  
    'multiply 1 2', 
  
    'decrease', 
  
    'end' 
  
  ] );
