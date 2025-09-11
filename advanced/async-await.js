

/*
What Is async / await?
async and await are syntactic sugar over Promises, introduced in ES2017, that make asynchronous code look and behave more like synchronous code—without blocking the event loop.

*/

//Example 1

async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    console.log(data);
}

//fetchData();

//Example 2
console.log("1");
async function run() {
    console.log("2");
    await Promise.resolve();
    console.log("3");
}

// run();
// console.log("4");

//Example 3 - Handling errors

async function getUser() {
    try{
        const res = await fetch("https://api.example.com/user");
        const user = await res.json();
        return user;
    } catch(err){
        console.log("Failed to fetch user: ", err);
    }
}
getUser();

