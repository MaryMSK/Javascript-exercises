//Task 1.
function isNumberInRange(num) {
    if (num > 0 && num < 10) {
        return true;
    } else {
        return false;
    }
}
console.log(isNumberInRange(6)); //true
console.log(isNumberInRange(12)); //false


//Task 2.
let arr = [1, 4, 12, 8, 15, -3, 0, 6];

function isNumberInRange(num) {
    if (num > 0 && num < 10) {
        return true;
    } else {
        return false;
    }
}
let newArr = [];
for (let i = 0; i < arr.length; i++) {
    if (isNumberInRange(arr[i])) {
        newArr.push(arr[i]);
    }
}
console.log(newArr); //[1,4,8,6]


//Task 3.
function getDigitsSum(num) {
    let sum = 0;
    let str = String(num);
    for (let i = 0; i < str.length; i++) {
        sum += Number(str[i]);
    }
    return sum;
}
console.log(getDigitsSum(645)); //!!! Уточнить про эту задачу!


//Task 4.
function getDigitsSum(num) {
    let sum = 0;
    let str = String(num);
    for (let i = 0; i < str.length; i++) {
        sum += Number(str[i]);
    }
    return sum;
}
for (let i = 0; i <= 2021; i++) {
    if (getDigitsSum(i) == 13) {
        console.log(i);
    }
} //!!! Проверить эту задачу


//Task 5.
function isEven(num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isEven(9));
console.log(isEven(10));
console.log(isEven(30));


//Task 6.
let arr = [10, 6, 3, 19, 22, 40, 55, 60];

function isEven(num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
let newArr = [];
for (let i = 0; i < arr.length; i++) {
    if (isEven(arr[i])) {
        newArr.push(arr[i]);
    }
}
console.log(newArr); //[10,6,22,40,60]


//Task 7.
function getDivisors(num) {

}