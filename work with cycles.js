//Task 1.
let str = '';
for (let i = 1; i <= 9; i++) {
    str += i;
}
console.log(str); //123456789


//Task 2.
let str = '';
for (let i = 9; i >= 1; i--) {
    str += i;
}
console.log(str); //987654321


//Task 3.
let str = '';
for (let i = 1; i <= 9; i++) {
    str += '-' + i;
}
console.log(str + '-'); //-1-2-3-4-5-6-7-8-9-


//Task 4.
let str = ' ';
for (let i = 0; i <= 20; i++) {
    str += 'x';
    console.log(str);
}



//Task 5.
for (let i = 1; i <= 9; i++) {
    let str = '';
    for (let j = 1; j <= i; j++) {
        str += i;
    }
    console.log(str);
}


//Task 6.
let str = '';
for (let i = 0; i <= 5; i++) {
    str += 'xx';
    console.log(str);
}


//Multiplication table
for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
        console.log(i + '*' + j + '=' + i * j);
    }
}