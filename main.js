//Assignment1
//Q1
// let x="123";
// let result= Number(x)+7;
// console.log(result);
//----------------------------------------------------------
//Q2
// let x;
// if(!x){
//     console.log("Invalid");
// }
// ----------------------------------------------------------
//Q3
// for(let i = 1; i <= 10; i++) {
//     if(i % 2 == 0) {
//         continue;
//     }
//     console.log(i);
// }
//----------------------------------------------------------
//Q4
// let arr = [1, 2, 3, 4, 5];
// var result = arr.filter(function(num) {
//     return num % 2 === 0;
// });
// console.log(result);
//----------------------------------------------------------
//Q5
// let arr = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let result = [...arr, ...arr2];
// console.log(result);
//----------------------------------------------------------
//Q6
// var day = 2;
// switch(day) {
//     case 1:
//         console.log("Sunday");
//         break;
//     case 2:
//         console.log("Monday");
//         break;
//     case 3:
//         console.log("Tuesday");
//         break;
//     case 4:
//         console.log("Wednesday");
//         break;
//     case 5:
//         console.log("Thursday");
//         break;
//     case 6:
//         console.log("Friday");
//         break;
//     case 7:
//         console.log("Saturday");
//         break;
//     default:
//         console.log("Invalid day");
// }
//----------------------------------------------------------
//Q7
// let arr=["a","ab","abc"];
// var result=arr.map(function(str){
//     return str.length;
// });
// console.log(result);
//----------------------------------------------------------
//Q8
// let num=15;
// if(num%3==0 && num%5==0){
//     console.log("Divisible by both");
// }
//----------------------------------------------------------
//Q9
// let num=5;
// let multiplier= num*num;
// console.log(multiplier);
//----------------------------------------------------------
//Q10
// const person = {
//     name: 'John',
//     age: 25
// };
// function getInfo(person) {
//     const {name, age} = person;
//    return name + " is " + age + " years old";
// }
// console.log(getInfo(person));
//----------------------------------------------------------
//Q11
// function sum(a, b, c, d, e) {
//     let sum = a + b + c + d + e;
//     return sum;
// }
//----------------------------------------------------------
//Q12
// function  getData(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("success");
//         }, 3000);
//     });
// }
// getData().then((result) => {
//     console.log(result);
// });
//----------------------------------------------------------
//Q13
// let arr = [1, 3, 7, 2, 4];
// function findMax(arr) {
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }
// console.log(findMax(arr));
//----------------------------------------------------------
//Q14
// let person = {
//     name:"john",
//     age:30
// }
// function getKeys(obj){
//     return Object.keys(obj);
// }
// console.log(getKeys(person));
//----------------------------------------------------------
//Q15
// function text(str){
//     return str.split("");
// }
// console.log(text("The quick brown fox"));
//----------------------------------------------------------
//part2
//Q1
//forEach: used to iterate over arrays and perform a function on each element. It does not return a new array and cannot be stopped or broken out of early
//for of: used to iterate over iterable objects like arrays, strings, maps, sets, etc. It allows you to loop through the values of an iterable object directly and
// we can use break and continue statements inside the loop
//----------------------------------------------------------
//Q2
//Hoisting:function and variable declarations are moved to the top of their containing scope during the compilation phase, allowing them to be used before they are declared in the code
//Example of hoisting:
//console.log(x);
//var x = 10;    output: undefined

//temporal dead zone:it is the period from the beginning of the scope until the line that defines and initializes the variable—using let or const is executed
//Example of temporal dead zone:
//console.log(y); // ReferenceError: Cannot access 'y' before initialization
//let y = 20;
//----------------------------------------------------------
//Q3
//==: compares two values after converting them to the same type if necessary
//===:Compares two values and their data types without converting them
//-----------------------------------------------------------
//Q4
// try-catch is used to handle errors in JavaScript
//try: Contains the code that might cause an error
//catch: Handles the error if it occurs
//it is important in async operations becouse it allows you to catch and handle errors that may occur during the execution of asynchronous code
//-----------------------------------------------------------
//Q5
//conversion:Conversion: Changing a data type manually
//Example of conversion:
// let num = "123";
// let result = Number(num) +7;
// console.log(result); // Output: 130

//coercion:Coercion: Changing a data type automatically by JavaScript
//Example of coercion:
//let x= 1 + "5";
//console.log(x); // Output: "15"
