

/*
Promise is an object representing the eventual completion or failure of an asynchronous operation and its resulting value
*/

/*
Promise States:
A Promise has three states:

- **Pending** – Initial state, operation not yet completed
- **Fulfilled** – Operation completed successfully (`resolve`)
- **Rejected** – Operation failed (`reject`)

Useful for handling asynchronous logic like API calls, timers, or file reads.

*/

//Example 1: Basic Promise usage with simulated async behavior

function runPromise(success = true){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(success){
                resolve("Promise resolved: It worked!");
            }else{
                reject("Promise rejected: Something went wrong.");
            }
        }, 1000)
    });
}


//Usage
runPromise(true)
.then(result=> console.log(result))
.catch(err=>console.log(err));

//Example 2:
const myPromise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject("Promise rejected: Data failed to load");
    },1000);
});

myPromise1
.then((data)=> console.log(data))
.catch(err=>console.log(err));






