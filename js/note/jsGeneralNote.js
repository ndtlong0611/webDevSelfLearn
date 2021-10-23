// - console.log() == print() in  C++

// console.warn('warning_message')
    // - give warning message in console 
// console.error("error_message")
    // - give error message in console 
// alert() 
    // - no console. needed
    // show a pop-up warning on the current page
// prompt()
    // - prompt user to enter

///////////////////////////////////////////////////////////////////////////////////////////////
// parseInt(str)
    // - parse str into a number
///////////////////////////////////////////////////////////////////////////////////////////////
// To connect JS to HTML:
//  - must have <script src="<path to JS file>"></script>
//  - <script> should be put at the end of the HTML body, not in the <head>
///////////////////////////////////////////////////////////////////////////////////////////////
// To check for space in a string, use str.indexOf(' '):
// - it will return -1 if none space was found.
///////////////////////////////////////////////////////////////////////////////////////////////
// To check if a passed argument is a number: 
// if (typeof(argument) === 'number')

///////////////////////////////////////////////////////////////////////////////////////////////
// Try - catch:
// hello.toUpperCase(); <----- this is a statement that can cause error
// so put it like this:
try {
    hello.toUpperCase();
}
catch {
    console.log("ERROR!!!")
}
console.log("continue running as usual with try-catch")

// another example:
function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch(e) {
        console.log(e);
        console.log("Please pass a string next time!")
    }
}
//  try-catch can be used to handle the case where inputs are invalid.