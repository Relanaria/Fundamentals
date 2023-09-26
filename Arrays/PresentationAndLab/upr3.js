function revers(n, input) {
  let newArr = [];

  for (let i = n - 1; i < 0; i--) {
    newArr[i] = Number(input.pop());
  }

  console.log(newArr);
}

revers(3, [10, 20, 30, 40]);

revers(4, [-1, 20, 99, 5]);

revers(2, [66, 43, 75, 89, 47])

// алтернативно решение от софтуни лекция 
function reverse(n, inputArr) {
    let arr = [];
    for (let i = 0; i < n; i++)
    arr.push(inputArr[i]);
    let output = '';
    for (let i = arr.length - 1; i >= 0; i--)
    output += `${arr[i]} `;
    console.log(output);
}