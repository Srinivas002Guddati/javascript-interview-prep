/*
Definition of Hoisting:

Hoisting is JavaScript’s behavior of moving declarations (variables, functions, classes) to the top of their scope during the compilation phase.
- var is hoisted and initialized to undefined
- let and const are hoisted but remain in the Temporal Dead Zone (TDZ)
- Function declarations are fully hoisted
- Function expressions and arrow functions are not hoisted
*/

// Function hoisting
greet(); // Works: "Hello Srinivas"

function greet() {
  console.log("Hello Srinivas");
}

// Variable hoisting with var
console.log(x); //undefined
var x = 10;

// Variable hoisting with let (TDZ)
try {
  console.log(y); // ReferenceError
  let y = 20;
} catch (err) {
  console.log("TDZ Error:", err.message);
}

// Function expression (not hoisted)
try {
  sayHi(); // TypeError: sayHi is not a function
  var sayHi = function () {
    console.log("Hi!");
  };
} catch (err) {
  console.log("Expression Error:", err.message);
}


//Hoisting with classes

//Class are hoisted, but they cannot be accessed before they are declared, resulting in a ReferenceError.

const obj = new MyClass();

class MyClass{
  constructor(){
    this.name ="Srinivas";
  }
}


//Accessing variables declared later in loops
for(var i=0; i<3; i++){
  setTimeout(function(){
    console.log(i);
  }, 100);
}

//Hoisting in Nested functions

function outer(){
  console.log(a); //undefined
  var a = 5;
  function inner(){
    console.log(b);
    var b=10;
  }
  inner();
}
outer();