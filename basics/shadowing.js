

/*
What Is Variable Shadowing?
Shadowing occurs when a variable declared in an inner scope (like a function or block) has the same name as a variable in an outer scope. The inner variable overrides or hides the outer one within its scope.
Think of it like a shadow cast over the outer variable — it still exists, but you can’t see or access it from inside.

*/

/*
Key Characteristics
- Shadowing is legal in JavaScript
- It’s scope-sensitive: block scope (let, const) vs function scope (var)
- Can lead to confusing bugs if not handled carefully

*/

//Example:
// Global scope
let name = "Srinivas";

function greet() {
  // Function scope shadows global
  let name = "Developer";
  console.log("Inside greet:", name); // Developer
}

greet();
console.log("Outside greet:", name); // Srinivas

// Block scope shadowing
let role = "Lead";

if (true) {
  let role = "Mentor";
  console.log("Inside block:", role); // Mentor
}

console.log("Outside block:", role); // Lead


//=============***=============

//Shadowing with var vs let/const
var x = "outer";

function test() {
  var x = "inner"; // shadows outer x
  console.log(x);  // inner
}

test();
console.log(x);    // outer

// With let (block scope)
let y = "outer";

{
  let y = "inner"; // shadows outer y only in block
  console.log(y);  // inner
}

console.log(y);    // outer