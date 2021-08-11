//Task 1.
for (let i = 1; i <= 100; i++) {
    console.log(i);
}


//Task 2.
for (let i = 100; i >= 1; i--) {
    console.log(i);
}


//Task 3.
//1 Var.
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

//2 Var.
for (let i = 2; i < 100; i += 2) {
    console.log(i);
}


//Task 4.
let arr = [];
for (let i = 1; i <= 10; i++) {
    arr.push('x');
}
console.log(arr);


//Task 5.
let arr = [];
for (let i = 1; i <= 10; i++) {
    arr.push(i);
}
console.log(arr);


//Task 6.
let arr = [];
for (let i = 0; i < 10; i++) {
    arr.push(Math.random().toFixed(2));
}
console.log(arr);


//Task 7.
//1 Var.
let arr = [];
for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * (10 - 1 + 1)) + 1); //!!! Изучить функцию Math.random
}
console.log(arr);

//2 Var.
let arr = [];
for (let i = 0; i < 10; i++) {
    arr.push(Math.round(Math.random() * 10) + 1);
}
console.log(arr);


//Task 8.
let arr = [1, 2, 3, -6, 9, 17, -8, -9];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] < 10) {
        console.log(arr[i]);
    }
}


//Task 9.
//1 Var.
let arr = [4, 3, 5, 7, 8, 9, 5, 1];
let flag = false;
for (let elem of arr) {
    if (elem == 5) {
        flag = true;
        break;
    }
}
if (flag) {
    console.log('Есть!');
} else {
    console.log('В массиве нет элемента 5');
}

//2 Var.
let arr = [4, 3, 5, 7, 8, 9, 5, 1];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 5) {
        console.log('Есть!');
        break;
    }
}


//Task 10.
let arr = [17, 10, 3, 50, 100, 20];
let sum = 0;
for (let elem of arr) {
    sum += elem;
}
console.log(sum); //200


//Task 11.
let arr = [2, 3, 4, 5, 6];
let sum = 0;
for (let elem of arr) {
    sum += elem * elem;
}
console.log(sum); //90


//Task 12
let arr = [20, 40, 30, 10];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i] / arr.length;
}
console.log(sum); //25