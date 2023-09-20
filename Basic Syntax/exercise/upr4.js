function vacation(number, typeGroup, day) {
  let discount = -1;
  let people = Number(number);
  let sum = 0;

  switch (typeGroup) {
    case "Students":
        if(number >= 30){
            discount = 0.15;
        }
      switch (day) {
        case "Friday":
            sum = people * 8.45;
          break;
        case "Saturday":
            sum = people * 9.80;
          break;
        case "Sunday":
            sum = people * 10.46;
          break;
      }
      break;
    case "Business":
        if(number >= 100){
            people -= 10;
        }
      switch (day) {
        case "Friday":
            sum = people * 10.90;
          break;
        case "Saturday":
            sum = people * 15.60;
          break;
        case "Sunday":
            sum = people * 16;
          break;
      }
      break;
    case "Regular":
        if(number >= 10 && number <= 20){
            discount = 0.05;
        }
      switch (day) {
        case "Friday":
            sum = people * 15;
          break;
        case "Saturday":
            sum = people * 20;
          break;
        case "Sunday":
            sum = people * 22.50;
          break;
      }
      break;
  }

  if(discount > 0){
    sum -= discount * sum;
  }

  console.log(`Total price: ${sum.toFixed(2)}`);
}


vacation(40,
    "Regular",
    "Saturday")