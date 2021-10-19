// - A string must be wrapped in double quotes
let strExample = "this is a string"
// double quotes and single quotes all can be used for enclosing strings, 
//  but ech of them has to go accordingly. 

// The other type of quote can be used within a pair of another to 

// Strings are indexed, first one starts with 0
strExample[0]

//Built-in function:
strExample.length


//String concatenation
str1 = " and this is for concatenating"
strExample + str1

// a string can only be changed as a whole. Can't change one character only.

// String Methods: thing.method() <-- () is important, because without it, it doesn't do anything 
strExample.toUpperCase()
str1.trim()


// Methods can be chained:
str1.trim().toUpperCase()


// String methods with Argument:
// str1.indexOf('is') <-- give the index of "is" in the str1
// str1.slice(beginIndex ,endIndex) <-- Slice a string with char from 0 to 5
    // str1.slice(5)
// str1.replace('a','b') <-- Replace 'a' in str1 with 'b'
// str1.repeat(a) <--- Repeat str1 a times

// String Template Literal: new feature of JS
// `I counted ${3 + 4} sheeps` <- not single quote, Must use back-tick `` (tilde key)

// without template literal: 
// "You bought " + qty + " " + product + ". Total is " + price*qty

// With template literal:
// `You bought ${qty} ${product}. Total is ${price*qty}`