//Task 1.
let i = 1;
while (i <= 100) {
    console.log(i);
    i++;
}


//Task 2.
for (let i = 11; i <= 33; i++) {
    console.log(i);
}


//Task 3.
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}


//Task 4.
let result = 1;
for (let i = 0; i <= 100; i++) {
    result += i;
}
console.log(result); //5051


//Task 5.
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


//Task 6.
let result = 0;
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    result += arr[i];
}
console.log(result); //15


//Task 7.
let obj = { green: 'зеленый', red: 'красный', blue: 'голубой' };
for (key in obj) {
    console.log(key + ' ' + ':' + ' ' + obj[key]);
}


//Task 8.
let obj = { Коля: '200', Вася: '300', Петя: '400' };
for (key in obj) {
    console.log(key + ' ' + '-' + ' ' +
        'зарплата' + ' ' + obj[key] + ' ' + 'долларов' + '.');
}


//Task 9.
let arr = [2, 5, 9, 15, 0, 4];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 3 && arr[i] < 10) {
        console.log(arr[i]);
    }
}


//Task 10.
let result = 0;
let arr = [2, -4, 6, -3, -1, 0, 7, 10, -9];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        result += arr[i];
    }
}
console.log(result);


//Task 11.
let arr = [1, 2, 5, 9, 4, 13, 4, 10];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 4) {
        console.log('Есть!');
        break;
    }
}


//Task 12.
let arr = [10, 20, 30, 50, 235, 3000];
for (let i = 0; i < arr.length; i++) {
    let str = String(arr[i]);
    if (str[0] == 1 || str[0] == 2 || str[0] == 5) {
        console.log(arr[i]);
    }
}


//Task 13.
let str = '';
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < arr.length; i++) {
    str += '-' + arr[i];
}
console.log(str + '-');


//Task 14.
let week = ['Mon', 'Tue', 'Wed', 'Th', 'Fr', 'St', 'Sun'];
for (let i = 0; i < week.length; i++) {
    if (week[i] == week[5] && week[i] == week[6]) {
        console.log('<strong>' + week[i] + '</strong>');
    } else {
        console.log(week[i]);
    }
}


/* let week = ['Mon', 'Tue', 'Wed', 'Th', 'Fr', 'St', 'Sun'];
for (day in week) {
    if (week[day] === 'St' || week[day] === 'Sun') {
        document.write('<b>' + week[day] + '</b>');
    } else {
        document.write(week[day]);
    }
} */


//Task 15.
let week = ['Mon', 'Tue', 'Wed', 'Th', 'Fr', 'St', 'Sun'];
let today = week[5];
for (let i = 0; i < week.length; i++) {
    console.log('<i>' + week[today] + '</i>');
}


/* let week = ['Mon', 'Tue', 'Wed', 'Th', 'Fr', 'St', 'Sun'];
let today = 'St';
for (day in week) {
    if (week[day] == today) {
        document.write('<i>' + week[today] + '</i>');
    } else {
        document.write(week[day] + '<br>');
    }
} */

//Task 16.
let n = 1000;
let num = 0;
while (n >= 50) {
    n = n / 2;
    num++;
}
console.log('Число:' + ' ' + n); //31,25
console.log('Кол-во итераций =' + ' ' + num); // 5

for (let num = 0, n = 1000; n >= 50; num++, n = n / 2) {
    console.log('Число:' + ' ' + n);
    console.log('Кол-во итераций =' + ' ' + num);
}