// - Allow us to write reusable, modular code . 

// Function Syntax:
// function funcName() {
//     //do something
// }

// Another function can be defined (and called) within another function

// To Run a function: funcName() <------- with ()
///////////////////////////////////////////////////////////////////////////////////////////////
// Function Expression: different way of defining a function, that is
//                          to store a function as a var name
/*ex1:*/ 
// function add (x,y) {
//     return x+y;
// }
// can be written as:
const add = function (x,y) {
    return x + y;
}
///////////////////////////////////////////////////////////////////////////////////////////////
//Function Arguments: 
function greet(person) {
    console.log(`Hi, ${person}`)
}

// Multiple Function Arguments:
function greet(firstName, lastName) {  // Order matters, obviously
    console.log(`Hello there, ${firstName} ${lastName[0]}.`)
}

// if lastName is used instead of lastName[0], when lastName argument is not provided:
// - an error will not be thrown by JS 
// The use of lastName[0] can cause an error if lastName is not provided

///////////////////////////////////////////////////////////////////////////////////////////////
// Return: 
// - stops execution of that function
// - return one value 
function sum(num1, num2) {
    return (num1 + num2)
}
///////////////////////////////////////////////////////////////////////////////////////////////
// Scope: variable "visibility"
// 1. Function Scope
let a = 1
function doSth() {
    a = 120
    // print (a) //120
}
// print a // 1 

// 2. Block Scope: if, for, while
// if any var is declared by let, it will get restricted to that block and/or function     
// But if any var is declared by var, it will get restricted to that function, but not block

// 3. Lexical Scope:
// - A function (child function) defined within another function (parent function)
// - Then, child function can access anything declared in the parent function

///////////////////////////////////////////////////////////////////////////////////////////////
//  High Order Function:
//  - Function that operates on/with other functions
//  - It can accept other functions as arguments and return a function

function doSth(func) {
    console.log("Do Sth");
}

function callTwice(func) {
        func();
}

// callTwice(doSth) is different from callTwice(doSth()) <--- with parentheses
// callTwice(doSth()) will execute doSth on the spot then passed the result to callTwice
// While callTwice(doSth) will pass doSth as a param to callTwice

// Return a Function within a function:
// function-making function!!!!
function makeBetweenFunc(min, max) {
    return function (num) {
        return (num >= min && num <= max);
    }
}

isChild = makeBetweenFunc(0,17) 
isAdult = makeBetweenFunc(18,64)

