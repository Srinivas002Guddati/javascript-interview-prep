

/*
What Is the Temporal Dead Zone (TDZ)?
The TDZ is the time between entering a scope and the actual declaration of a let or const variable. During this time:
- The variable exists in memory
- But it’s not accessible
- Accessing it throws a ReferenceError
TDZ helps catch bugs by preventing access to variables before they’re safely initialized.

*/

// var: hoisted and initialized
console.log(a); // undefined
var a = 10;

// let: hoisted but uninitialized (TDZ)
try {
  console.log(b); // ReferenceError
  let b = 20;
} catch (err) {
  console.log("TDZ Error:", err.message);
}

// const: same TDZ behavior
try {
  console.log(c); // ReferenceError
  const c = 30;
} catch (err) {
  console.log("TDZ Error:", err.message);
}

//example
function greet() {
  console.log(name); // ReferenceError
  let name = "Srinivas";
}
greet();
