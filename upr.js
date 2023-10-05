function areaOffigures(input) {
  let figure = input[0];
  let result = 0;

  switch (figure) {
    case "square":
      break;
    case "rectangle":
      break;
    case "circle":
      break;
    case "trinagle":
        result = 1/2 * Number(input[1]) * Number(input[2]);
      break;
  }

  console.log(result.toFixed(3));
}


areaOffigures(["dsahuiiudhsa", 4.5])
