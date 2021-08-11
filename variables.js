//The task 5. The work with variables.
let a = 17,
    b = 10;
let c = a - b;
let d = 7;
let result = c + d;
console.log(result);

//The task 7. The work with strings.
//Create two variables with strings and display them in the console.
let str1 = 'Hello,';
let str2 = 'Word!';
console.log(str1 + str2);

/* The task 9. Create the variable "age" and assign to it your age.
Print this string to the console. */
let age = 23;
console.log('I am' + ' ' + age + ' ' + 'years old!');

/* The task 10. Function 'prompt'.
Ask for a user name and display a message on the browser screen. */

alert('Your name:' + prompt('What is your name?'));

/* The task 11. Ask for a user a number and display 
a square of this number with alert function . */

let num = prompt('Put an any number');
alert('Square of this number is:' + num * num);

//Task 13. Find a multiplication of numbers figures in variable num. 

let num = '12345';
let number = Number(num);
let multiple = num[0] * num[1] * num[2] * num[3] * num[4];
console.log(multiple);

//Task 14. Write a script which count sum of seconds in hour, a day, a mounth.

let hour = 60 * 60;
console.log('Seconds in hour:' + hour);
let day = hour * 24;
console.log('Seconds in a day:' + day);
let mounth = day * 30;
console.log('Seconds in month:' + mounth);

/* Task 15. Create free variables: hour, minute, second.
Display in the console current time. */

let hour = 13;
let minute = 05;
let second = 10;
console.log('Current time:' + ' ' + 'hour:' + hour + ' ' +
    'minute:' + minute + ' ' + 'second:' + second);

/* Task 16. Create a variable , give it a number 
and print a square of this number. */

let num = 100;
console.log(num * num);