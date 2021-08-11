//Task 1. Work with %
let a = 10;
let b = 3;
console.log(a % b); //1

/* Task 2. Work with %. Check that the variable a 
to divide without residue by variable b. */

// 1 var.
function checkDivision(a, b) {
    if ((a % b) > 0) {
        return 'Делится с остатком' + ' ' + a % b;
    } else {
        return 'Делится, результат деления:' + ' ' + a / b;
    }
}
console.log(checkDivision(20, 3)); //2
console.log(checkDivision(30, 10)); //3
console.log(checkDivision(100, 90)); //10

//2 var.
let a = 10;
let b = 3;
if ((a % b) > 0) {
    console.log('Делится с остатком' + ' ' + a % b);
} else {
    console.log('Делится, результат деления:' + ' ' + (a / b));
}

//3 var.
let a = 15;
let b = 6;
let result = a % b;

if (result != 0) {
    console.log('Делится с остатком' + ' ' + result);
} else {
    console.log('Делится, результат деления:' + ' ' + (a / b));
}


//Task 3. Work with power
let st = Math.pow(2, 10);
console.log(st); //1024

//Task 4. Work with square root
console.log(Math.sqrt(245)); //15.6524


//Task 5. Find square root from sum of cubes of elements in array.
let arr = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += Math.pow(arr[i], 3); //10253
}
console.log(Math.sqrt(sum)); //101.2570


//Task 6.
let num = 379;
let sqrroot = Math.sqrt(num);
console.log('Квадратный корень из числа равен:' + ' ' + sqrroot); //19.4679
console.log('Результат до целых:' + ' ' + sqrroot.toFixed()); //19
console.log('Результат до десятых:' + ' ' + sqrroot.toFixed(1)); //19.5
console.log('Результат до сотых:' + ' ' + sqrroot.toFixed(2)); //19.47


//Task 7.
/* let num = 587;
let sqrroot = Math.sqrt(num);
console.log('Квадратный корень из числа равен:' + ' ' + sqrroot);

let ceils = Math.ceil(sqrroot);
let floors = Math.floor(sqrroot);

let obj = { ceil: ceils, floor: floors };
console.log('Результаты округления:' + ' ' + 'в большую сторону:' +
    ' ' + obj['ceils'] + ';' + ' ' + 'в меньшую сторону:' + ' ' +
    obj['floors']);
 */

let obj = {};
let sqr = Math.sqrt(587);
obj['floor'] = Math.floor(sqr);
obj['ceil'] = Math.ceil(sqr);

console.log('Квадратный корень из числа равен:' + ' ' + sqr); //24.2280
console.log(obj); //{ floor: 24, ceil: 25 }


//Task 8. Work with Math.min and Math.max
console.log('Максимальное число:' + ' ' +
    Math.max(4, -2, 5, 19, -130, 0, 10)); //19

console.log('Минимальное число:' + ' ' +
    Math.min(4, -2, 5, 19, -130, 0, 10)); //-130


//Task 9. Work with Math.random
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomNum(1, 100));


//Task 10.
let min = 1;
let max = 100;
let arr = [];
for (let i = 0; i < 10; i++) {
    arr[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(arr);




//Task 11. Work with Math.abs
let a = -15;
let b = 5;
let result = a - b;
console.log(Math.abs(result)); //20


//Task 12. Work with Math.abs
let a = 3;
let b = 5;
let c = Math.abs(a - b);
console.log(c); //2


//Task 13.
let arr = [12, 15, 20, 25, 59, 79];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; //210
}
console.log(sum / arr.length); //35


//Task 14.
let n = 4;
let fact = 1;
for (let i = 1; i <= n; i++) {
    fact *= i;
}
console.log(fact); //24