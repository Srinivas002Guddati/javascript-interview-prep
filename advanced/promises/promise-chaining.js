
//Simulated async task using Promise
function task(message, delay){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log(message);
            resolve();
        }, delay);
    })
}

//Chaining multiple taks
task("Task 1 completed", 1000)
.then(()=>task("Task 2 completed", 1500))
.then((()=>task("Task 3 completed", 1000)))
.then(()=> console.log("All tasks are completed"))
.catch(err=> console.log("Error", err));