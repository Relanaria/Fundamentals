function date(num1, num2, num3){
    let year = num1;
    let month = num2;
    let day = num3;

    let currentDate = new Date(year, month - 1, day);
    currentDate.setDate(currentDate.getDate() + 1);

    let year1 = currentDate.getFullYear();
    let month1 = currentDate.getMonth() + 1;
    let day1= currentDate.getDate();


    console.log(`${year1}-${month1}-${day1}`);
}

date(1901, 1, 2)
date(2016, 9, 30)
date(2020, 3, 24)
