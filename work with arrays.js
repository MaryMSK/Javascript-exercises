//Task 1.
let arr = [];
let str = 'x';
for (let i = 0; i < 10; i++) {
    arr.push(str);
    str += 'x';
}
console.log(arr); //!!! Узнать, как заполнять массив циклом?


//Task 2.
let arr = [];
for (let i = 1; i < 10; i++) {
    let str = '';
    for (let j = 0; j < i; j++) {
        str += i;
    }
    arr.push(str);
}
console.log(arr); //!!! Разобрать , как работают эти циклы?


//Task 3.
function arrayFill(value, length) {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(value);
    }
    return arr;
}
console.log(arrayFill('x', 5));


//Task 4.
let arr = [1, 2, 7, 8, 10];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum > 10) {
        console.log('Для получения в массиве числа > чем 10 нужно сложить:' + ' ' + i + ' ' + 'чисел');
        break;
    }
}
if (sum <= 10) {
    console.log('Сумма меньше 10')
} //Для получения в массиве числа > чем 10 нужно сложить: 3 чисел


//Task 5.
let arr = [1, 2, 3, 4, 5];
let newArr = [];
for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
}
console.log(newArr); //[5,4,3,2,1] !!! Узнать технику переворота массива без reverse!


//Task 6.
let arr = [
    [1, 2, 3],
    [4, 5],
    [6]
];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        sum += arr[i][j];
    }
}
console.log(sum); //21


//Task 7.
let arr = [
    [
        [1, 2],
        [3, 4]
    ],
    [
        [5, 6],
        [7, 8]
    ]
];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        for (k = 0; k < arr[i][j].length; k++) {
            sum += arr[i][j][k];
        }
    }
}
console.log(sum); //36