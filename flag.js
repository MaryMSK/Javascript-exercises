/* Task 1. There is the arr. Check that this is the arr has a number 5.
If it is output then 'Yes!', else 'No!'. */
let arr = [1, 2, 3, 4, 5, 6, 7];
let flag = false;
for (let elem of arr) {
    if (elem == 5) {
        flag = true;
        break;
    }
}
if (flag) {
    console.log('Yes!');
} else {
    console.log('No!');
}


//Task 2. 
let num = 31;
let flag = false;
for (let i = 2; i < num; i++) {
    if (num / i == 0) {
        flag = true;
        break;
    }
}
if (!flag) {
    console.log('Dont divide by 2');
} else {
    console.log('Divide by 2');
}


//Task 3.
let arr = [15, 12, 11, 11, 16, 20];
let flag = false;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i - 1]) { //!!! Узнать, почему arr[i - 1]?
        flag = true;
        break;
    }
}
if (!flag) {
    console.log('No!');
} else {
    console.log('Yes!')
}