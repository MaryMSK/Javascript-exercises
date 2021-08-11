//Task 1. Write a JS programm which return square number.
function squareNum(num) {
    return num * num;
}
console.log(squareNum(5)); //25


//Task 2. Write a JS programm which return sum of two numbers.
function calculateSum(a, b) {
    return a + b;
}
console.log(calculateSum(100, 200)); //300


/* Task 3. Write a JS programm which subtract the second number
 from the first number and divide by third number. */
function calculateResult(a, b, c) {
    return (a - b) / c;
}
console.log(calculateResult(20, 10, 2)); //5


/* Task 4. Write a JS programm which accept number from 1 to 7
and return week day in russian language. */
/* function showWeekDay(day) {
    let weekDay = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
    return weekDay[day]
}
console.log(showWeekDay(4)); */

function showWeekDay(day) {
    let weekDay = { 1: 'пн', 2: 'вт', 3: 'ср', 4: 'чт', 5: 'пт', 6: 'сб', 7: 'вс' };
    return weekDay[day]
}
console.log(showWeekDay(4)); //чт