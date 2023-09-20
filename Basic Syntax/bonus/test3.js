function calculateNextDay(year, month, day) {
    // Create a Date object based on the input values
    let currentDate = new Date(year, month - 1, day); // Month is zero-based, so subtract 1

    // Calculate the next day by adding one day (in milliseconds)
    currentDate.setDate(currentDate.getDate() + 1);

    // Extract the updated year, month, and day
    let nextYear = currentDate.getFullYear();
    let nextMonth = currentDate.getMonth() + 1; // Month is zero-based, so add 1
    let nextDay = currentDate.getDate();

    // Return the result as a string in the format "YYYY-MM-DD"
    console.log(`${nextYear}-${nextMonth}-${nextDay}`);
}

// Example usage:
let year = 1901;
let month = 1;
let day = 2;

let nextDay = calculateNextDay(year, month, day);
console.log(nextDay); // Output: "2023-09-16"
