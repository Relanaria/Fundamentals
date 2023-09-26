function equalArr(arr1, arr2) {
  let sum = 0;
  let check = false;

  for (let i = 0; i < arr1.length; i++) {
    if (Number(arr1[i]) == Number(arr2[i])) {
      sum += Number(arr1[i]);
    } else {
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      check = true;
      break;
    }
  }

  if(!check) {
    console.log(`Arrays are identical. Sum: ${sum}`);
  }
}


// equalArr(['10','20','30'], ['10','20','30'])
// equalArr(['1','2','3','4','5'], ['1','2','4','4','5'])
equalArr(['1'], ['10'])