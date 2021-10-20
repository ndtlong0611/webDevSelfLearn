// - Allow us to write reusable, modular code . 

// Function Syntax:
// function funcName() {
//     //do something
// }

// To Run a function: funcName() <------- with ()


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


// Return: 
// - stops execution of that function
// - return one value 
function sum(num1, num2) {
    return (num1 + num2)
}

// Scope: variable "visibility"
// 1. Function Scope
let a = 1
function doSth() {
    a = 120
    // print (a) //120
}
// print a // 1 

// 2. Block Function: if, for, while
// if any var is declared by let, it will get restricted to that block and/or function     
// But if any var is declared by var, it will get restricted to that function, but not block