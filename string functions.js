//Task 1. Work with toUpperCase
let str = 'js';
console.log(str.toUpperCase()); //'JS'

//Task 2. Work with toLowerCase
let str = 'JS';
console.log(str.toLowerCase()); // 'js'

//Task 3. Work with length
let str = 'я учу javascript!';
console.log(str.length); //17

//Task 4. Work with substr, substring, slice
let str = 'я учу javascript!';
console.log(str.substr(2, 14)); //!!! Спросить: почему со второго символа?
console.log(str.substring(2, 16)); //!!! Спросить: почему до 16 ого символа вырезаем слово?
console.log(str.slice(2, -1));

//Task 5. Work with indexOf
let str = 'я учу javascript!';
console.log(str.indexOf('учу')); //2

//Task 6. JS programm with substr
//1 var.
let n = 'New York City'
let str = 'London is the capital of Great Britain';
let result = '';
if (str.length > n.length) {
    result += str.substr(0, 6) + '...';
} else {
    result += str;
}
console.log(result);

//2 var.
let str = 'London is the capital of Great Britain';
let n = 6;
let result = '';
if (str.length > n) {
    result += str.substr(0, n) + '...';
} else {
    result += str;
}
console.log(result);




//Task 7. Work with replace
let str = 'Я-учу-javascript!';
console.log(str.replace(/-/g, '!'));

//Task 8. Work with split
let str = 'я учу javascript!';
let arr = str.split('');
console.log(arr); //!!! Спросить: как записать каждое слово,а не букву, в отдельный элемент массива?

//Task 10. Work with split
let date = '2025-12-31';
let arr = date.split('-');
let newStr = arr[2] + '.' + arr[1] + '.' + arr[0];
console.log(newStr); // 31.12.2025

//Task 11. Work with join
let arr = ['я', 'учу', 'javascript', '!'];
let str = arr.join('+');
console.log(str); //!!! Как записать предложение в строку?

//Task 12. 
//1 var.
let str = 'javascript';
let change = str[0].toUpperCase() + str.substr(2, 10);
console.log(change);

//2 var.
let str = 'javascript';
let newStr = str.slice(0, 1).toUpperCase() + str.slice(1);
console.log(newStr);


//Task 13.
let str = 'i love javascript';
let arr = str.split(''); // разобьем строку в массив слов
console.log(arr);
for (let i = 0; i < arr.length; i++) {
    //увеличим регистр каждого слова

    //arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
}
let result = arr.join(' '); //сольем массив обратно в строку
console.log(result); //!!! Спросить: как увеличить регистр первой буквы кажд.слова?


//Task 14.
let str = 'var_test_text';
let arr = str.split('_');
//let element = arr[0] + '-';
for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
}
let newStr = arr.join('');
let element = newStr[0] + '-' + newStr[1];
console.log(element); //!!! Спросить: как преобразовать строку в 'var-TestText'?