/* Task1. Write a JS programm and check 
if values are equal return true, else return false.  */

function checkValues(num1, num2) {
    if (num1 == num2) {
        return true;
    } else {
        return false;
    }
}
console.log(checkValues(15, 15));
console.log(checkValues(15, 10));

/* Task2. Write a JS programm and check 
if sum of values > 10 return true, else return false.  */

function checkSumOfValues(num1, num2) {
    if (num1 + num2 > 10) {
        return true;
    } else {
        return false;
    }
}
console.log(checkSumOfValues(3, 9));
console.log(checkSumOfValues(2, 4));

/* Task3. Write a JS programm and check  
if number is positive return true, else return false.  */

function checkNumber(num) {
    if (num / 2 > 0) {
        return true;
    } else {
        return false;
    }
}
console.log(checkNumber(10));
console.log(checkNumber(1));
console.log(checkNumber(-14));