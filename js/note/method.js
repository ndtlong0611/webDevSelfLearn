// Methods == Functions as properties on objects! 
// Methods are functions, but not all functions are methods 

// built-in methods example:
// String.toUpperCase()


const myMath = {
    PI: 3.14159,  // <----- that comma
    square (num) {
        return num*num;
    },  // <-------- that comma again
    cube (num) {
        return num*num*num;
    }
}

// "this" keyword:
//  is used to access other properties on the same objects