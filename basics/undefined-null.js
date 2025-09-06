

let a;
console.log(a); // undefined

let b = null;
console.log(b); // null

console.log(typeof a); // "undefined"
console.log(typeof b); // "object"

console.log(a == b);  // true
console.log(a === b); // false



/*
- Use undefined when a value is missing by default.
- Use null when a value is intentionally empty.
- Think of undefined as “not yet set” and null as “cleared on purpose.”

*/