console.log("FIRST JS FILE EVER!")

function rant(rantStr) {
    console.log(rantStr.toUpperCase())
    console.log(rantStr.toUpperCase())
    console.log(rantStr.toUpperCase())
}

function sumArray(array) {
    let sum = 0;
    for(i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
}

dateArr = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday"
}

const checkBox = document.querySelector("input")