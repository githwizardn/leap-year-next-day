/*
  დავალება 1
  შექმენით ფუნქცია რომელიც პარამეტრად მიიღებს 3 მნიშვნელობა: day, month, year.
  გადაცემული მნიშვნელობებიდან გამომდინარე უნდა დააბრუნოს შემდგომი დღე.

  დაბრუნების ფორმა: [day, month, year]

  function nextDay(day, month, year) {
    * code
  }

  console.log(nextDay(34, 12, 2024)); // "Gadacemuli dgis mnishvneloba arasworia"
  console.log(nextDay(10, 20, 2024)); // "Gadacemuli tvis mnishvneloba arasworia"
  console.log(nextDay(30, 2, 2024)); // "Gadacemuli tvis mnishvneloba arasworia"
  console.log(nextDay(29, 2, 2023)); // "Gadacemuli tvis mnishvneloba arasworia"
  console.log(nextDay(31, 6, 2023)); // "Gadacemuli dgis mnishvneloba arasworia"
  console.log(nextDay(29, 2, 2024)); // [1, 3, 2024]
  console.log(nextDay(31, 7, 2024)); // [1, 8, 2024]
  console.log(nextDay(22, 7, 2024)); // [23, 7, 2024]
  console.log(nextDay(31, 12, 2024)); // [1, 1, 2025]

  ! პ.ს არ გამოვიყენოთ Date
*/
function leapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function nextDay(day, month, year) {
  // Days in each month
  const daysInMonth = [
    31,
    leapYear(year) ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];

  // Check if the provided date is valid
  if (month < 1 || month > 12 || day < 1 || day > daysInMonth[month - 1]) {
    return "Gadacemuli dgis mnishvneloba arasworia";
  }

  // Move to the next day
  day += 1;

  // Check if the day exceeds the number of days in the current month
  if (day > daysInMonth[month - 1]) {
    day = 1; // Reset to the first day
    month += 1; // Move to the next month
    if (month > 12) {
      // If it exceeds December, reset to January and move to the next year
      month = 1;
      year += 1;
    }
  }

  return [day, month, year];
}

console.log(nextDay(34, 12, 2024)); // "Gadacemuli dgis mnishvneloba arasworia"
console.log(nextDay(10, 20, 2024)); // "Gadacemuli tvis mnishvneloba arasworia"
console.log(nextDay(30, 2, 2024)); // "Gadacemuli tvis mnishvneloba arasworia"
console.log(nextDay(29, 2, 2023)); // "Gadacemuli tvis mnishvneloba arasworia"
console.log(nextDay(31, 6, 2023)); // "Gadacemuli dgis mnishvneloba arasworia"
console.log(nextDay(29, 2, 2024)); // [1, 3, 2024]
console.log(nextDay(31, 7, 2024)); // [1, 8, 2024]
console.log(nextDay(22, 7, 2024)); // [23, 7, 2024]
console.log(nextDay(31, 12, 2024)); // [1, 1, 2025]
console.log(nextDay(11, 1, 2024));
console.log(nextDay(33, 5, 2024));
console.log(nextDay(123, 12, 2024));
console.log(nextDay(4, 2, 2024));
console.log(nextDay(31, 6, 2024));
