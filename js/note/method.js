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

const cat = {
    name: "furball",
    color: "white",
    breed: "scottish fold",
    meow() {
        console.log(this.color); // <---------- must use this.color, color  won't work
    }
}

// The value of "this" depends on the invocation context of the function it is used in

// => Window object: a top level object. 
// any method and function is a function of window