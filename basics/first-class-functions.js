

//Function statement aka Function declaration

function a(){
    console.log('a called');
}
a(); // works even if called before declaration ude to hoisting

//Function expression
const b = function(){
    console.log("Hi there!")
};

b(); //Not hoisted, can be anonymous or named, often used in callbacks or assigned to variables.


//Anonymous function
setTimeout(function(){
    console.log("Executed after delay");
}, 1000);
// No name between function and (). common in callbacks, IIFEs, and expressions


//Named function expression
const factorial = function fact(n){
    if(n<=1) return 1;
    return n * fact(n-1); //recursive call using internal name
};
console.log(factorial(5)); 
/*
- Name (fact) is scoped only inside the function body.
- Useful for recursion and debugging stack traces.

*/


//self invoking function IIFE
(function(){
    console.log("IIFE executed immediately");
})();
/*
- Runs immediately after definition.
- Creates a private scope, avoids polluting global namespace.

*/


// Differenc between parameter and argument 
function add(x, y){ // x&y are parameters
    return x+y;
};
add(5, 3); // 5 & 3 are arguments
/*
Parameter: Variable in function definition
Argument: Actual value passed during function call
*/

/* First class functions:
JavaScript treats functions as first-class citizens, meaning:
- Can be assigned to variables
- Passed as arguments
- Returned from other functions

*/

function greet(name){
    return `Hello, ${name}`;
}

function process(fn){
    console.log(fn("Srinvias"));
}

process(greet); // passing function as argument
//This enables powerful patterns like callbacks, closures, and higher-order functions.

