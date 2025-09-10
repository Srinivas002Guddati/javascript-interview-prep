
/*
What .finally() Does
- Runs after the Promise settles, whether it’s fulfilled or rejected
- Useful for cleanup tasks like hiding loaders, closing connections, or resetting UI state
- Doesn’t receive the result or error—just runs regardless

*/

function fetchData(success =true){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(success){
                resolve("Data fetched successfully");
            }else{
                reject("Failed to fetch data");
            }
        }, 1000);
    })
}

fetchData(false)
.then(result=> console.log('Result', result))
.catch(err=>console.log("Error", err))
.finally(()=>console.log("Operation completed (cleanup logic here"));