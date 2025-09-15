
/*
In contrast, global variables are the variables that define outside of functions. These variables have a global scope, so they can be used by any function without passing them to the function as parameters
*/

//Example

let name = "Srinivas" // Global variable

myFun();

function myFun(){
    console.log("Inside my funciton ", typeof name);
    console.log('Inside myFun - name', name);
}

console.log("Outside myFun - Type of name:", typeof name);
console.log("Outside myFun - name:", name);