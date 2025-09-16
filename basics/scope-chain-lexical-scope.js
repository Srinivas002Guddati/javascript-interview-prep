
/* Lexical Environment
A lexical environment is the structure that holds:
- Local memory (variables/functions declared in the current scope)
- A reference to its outer (parent) lexical environment
It’s created when a function is defined, not when it’s called — based on where it sits in the code.
*/


/*
The scope chain is the chain of lexical environments the JavaScript engine traverses to resolve variables:
- Starts from the current scope
- Moves outward to parent scopes
- Ends at the global scope
It’s how JavaScript finds variables — like climbing a ladder from local to global.

*/


//Global Lexical Environment
var a = 10;

function outer() {
  var b = 20;

  function inner() {
    var c = 30;
    console.log(a, b, c); // Scope chain: inner → outer → global
  }

  inner();
}

outer();

//Scope chain:
var a = "Global";

function outer() {
  var b = "Outer";

  function inner() {
    var c = "Inner";
    console.log(a); // Global
    console.log(b); // Outer
    console.log(c); // Inner
  }

  inner();
}

outer();