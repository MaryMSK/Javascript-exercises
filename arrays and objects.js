/* Task 4. You need to multiply the first element of the array by the second 
and the third by the fourth. Add the result and assign it to a variable.
Print this variable to the console. */
arr = [2, 5, 3, 9];
let result = arr[0] * arr[1] + arr[2] * arr[3];
console.log(result);

/* Task 8. Week days are saved in the object.
Print the day variable with number of week day to the console. */

let obj = {
    1: 'Пн',
    2: 'Вт',
    3: 'Ср',
    4: 'Чт',
    5: 'Пт',
    6: 'Сб',
    7: 'Вс'
};
let day = ['3'];
console.log(obj[day]);

/* Task 9. There is multidimensional array. 
Print the element 4 to the console. */
arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(arr[1][0]);

//Task 10. Print the element 'jQuery' in the object to the console.

let obj = {
    js: ['jQuery', 'Angular'],
    php: 'hello',
    css: 'world'
};
console.log(obj['js'][0]);

/* Task 11. There is multidimensional array with week days in ru and in en.
Print 'Пн' in ru and 'Wed' in en to the console. */

let arr = {
    'ru': ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс', ],
    'en': ['Mon', 'Tu', 'Wed', 'Th', 'Fr', 'Sat', 'Sun', ]
};
console.log(arr['ru'][0]);
console.log(arr['en'][2]);

/* Task 12. Print to the console any week day 
which keys are saved in two variables. */

let arr = {
    'ru': ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс', ],
    'en': ['Mon', 'Tu', 'Wed', 'Th', 'Fr', 'Sat', 'Sun', ]
};
let lang = 'ru';
let day = [3];
console.log(arr[lang][day]);