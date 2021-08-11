//Task 1. Work with concat
let a = [1, 2, 3];
let b = [4, 5, 6];
let c = a.concat(b);
let d = b.concat(a);
console.log(c); //[1,2,3,4,5,6]
console.log(d); //[4,5,6,1,2,3]


//Task 2. Work with reverse
let arr = [1, 2, 3];
let newArr = arr.reverse();
console.log(newArr); //[3,2,1]


//Task 3. Work with push
let arr = [1, 2, 3];
arr.push(4, 5, 6);
console.log(arr); //[1,2,3,4,5,6]


//Task 4. Work with unshift
let arr = [4, 5, 6];
arr.unshift(1, 2, 3);
console.log(arr); //[1,2,3,4,5,6]


//Task 5. Work with shift (output to console the first element)
let arr = ['js', 'css', 'jq'];
let first = arr.shift();
console.log(first); //js


//Task 6. Work with pop (output to console the last element)
let arr = ['js', 'css', 'jq'];
let last = arr.pop();
console.log(last); //jq


//Task 7. Work with slice
let arr = [1, 2, 3, 4, 5];
let newArr = arr.slice(0, 3);
console.log(newArr); //[1,2,3]


//Task 8. Work with slice
let arr = [1, 2, 3, 4, 5];
let newArr = arr.slice(-2); //!!! Спросить: почему нельзя написать (3,2)?
console.log(newArr); //[4,5]


//Task 9. Work with splice
let arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);
console.log(arr); //[1,4,5]


//Task 10. Work with splice
let arr = [1, 2, 3, 4, 5];
let newArr = arr.splice(1, 3);
console.log(newArr); //[2,3,4]


//Task 11. Work with splice
let arr = [1, 2, 3, 4, 5];
arr.splice(3, 0, 'a', 'b', 'c');
console.log(arr); //[1, 2, 3, 'a', 'b', 'c', 4, 5]


//Task 12. Work with splice
let arr = [1, 2, 3, 4, 5];
arr.splice(1, 0, 'a', 'b');
arr.splice(6, 0, 'c');
arr.splice(8, 0, 'e');
console.log(arr); //[1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']


//Task 13. Work with sort
let arr = [3, 4, 1, 2, 7];
console.log(arr.sort()); //[1,2,3,4,7]


//Task 14. Work with Object.keys
let obj = { js: 'test', jq: 'hello', css: 'world' };
console.log(Object.keys(obj)); //['js', 'jq', 'css']