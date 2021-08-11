//Task 9, 10. Work with logic variables.

let test = true;
if (test == true) {
    console.log('Correct!')
} else {
    console.log('Uncorrect!')
}

let test = true;
if (!test) console.log('Correct!');
else console.log('Uncorrect!');


/* Task 13. If variable a <= 1 and variable b >= 3 output them sum 
else output them difference.*/

let a, b;
a = 3;
b = 5;
if (a <= 1 && b >= 3) {
    console.log(a + b);
} else {
    console.log(a - b);
}

/* Task 16. The variable day contains some number.
Determine at what ten-day period this number falls(first, second, third). */

let day = 15;

if (day >= 1 && day <= 10) {
    console.log('First ten-day period')
} else if (day >= 11 && day <= 20) {
    console.log('Second ten-day period')
} else if (day >= 12 && day <= 31) {
    console.log('Third ten-day period')
}

/* Task 17. The variable month contains some number from the interval from 1 to 12. 
Determine at what time of the year this month falls (winter, summer, spring, autumn). */

let month = 7;

if (month >= 12 && month <= 2) {
    console.log('Winter')
} else if (month >= 3 && month <= 5) {
    console.log('Spring')
} else if (month >= 6 && month <= 8) {
    console.log('Summer')
} else if (month >= 9 && month <= 11) {
    console.log('Autumn')
}

/* Task 18. Check string 'abcde' if first symbol of string == 'a'
output to console 'Yes!' else output to the console 'No!'. */

let string = 'abcde';

if (string[0] == 'a') {
    console.log('Yes!')
} else {
    console.log('No!')
}

/* Task 19. Check string '12345' if first symbol of string == '1' or '2'
or '3' output to console 'Yes!' else output to the console 'No!'. */

let string = '12345';

if (string[0] == '1' || string[0] == '2' || string[0] == '3') {
    console.log('Yes!')
} else {
    console.log('No!')
}

/* Task 20. There is a string of 3 numbers. Find sum of these numbers.*/

let string = '567';

if (string == '567') {
    console.log(Number(string[0]) + Number(string[1]) + Number(string[2]))
} else {
    console.log('Another string!')
}

/* Task 21. There is a string of 6 numbers. Check that the sum of the first free
numbers are equal the sum of the second three numbers. If it is true output to 
console 'Yes!' else output to the console "No!". */

let string = '543156';

if (Number(string[0]) + Number(string[1]) + Number(string[2]) ==
    Number(string[3]) + Number(string[4]) + Number(string[5])) {
    console.log('Yes!')
} else {
    console.log('No!')
}