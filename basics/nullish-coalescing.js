

/*
The ?? operator in JavaScript is called the nullish coalescing operator, and it’s a powerful tool for handling default values without accidentally overriding valid ones like 0, false, or "".

*/
let a = 10;
let result = a ?? b;
console.log(result);

//Example

const name = undefined // null;
const displayName = name ?? "Anonymous";
console.log(displayName);

//Example
let firstName = "Srinivas", lastName = "Guddati", nickName = "Srini"
const userName = firstName ?? lastName ?? nickName ?? "Guest";
console.log(userName);