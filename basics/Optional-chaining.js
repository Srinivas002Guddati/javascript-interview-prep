
/*
what is Optional Chaining?
Optional chaining (?.) in JavaScript is a powerful feature introduced in ES2020 that allows you to safely access deeply nested object properties without having to check each level manually.
*/

//It prevents errors like : TypeError: Cannot read property 'name' of undefined

//Syntax example

// Accessing nested properties
const user = {
    profile: {
        name: 'Srinivas'
    }
}

console.log(user.profile?.name); //"Srinivas"
console.log(user.address?.street); //undefined (no error!)


//Calling Optional Functions
const users = {
    greet: () => "Hello Srinivas"
};

console.log(users.greet?.()); //"Hello Srinivas"
console.log(users.sayHi?.()); //undefined (no error!)


//Accessing Array Elements

const arr = [ { name: "Srinivas" }, "JavaScript"];
console.log(arr[0]?.name); //"JavaScript"
console.log(arr[1]?.name); //"undefined"

/*
Why It’s Useful
- Cleaner code — no need for multiple if checks
- Safer access to APIs or dynamic data
- Great for working with optional props in React or backend responses
*/