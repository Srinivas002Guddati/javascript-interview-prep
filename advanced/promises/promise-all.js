

/*
What This Demonstrates
- All three Promises run simultaneously
- Promise.all() waits for all to resolve
- If any one fails, the entire .then() is skipped and .catch() runs

*/

//Simulated async tasks

function fetchData(id, delay){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(`Data ${id} fetch in ${delay}`);
        }, delay);
    })
}

//Run all tasks in parallel
Promise.all([
    fetchData(1, 1000), 
    fetchData(2, 1500), 
    fetchData(3, 500)
])
.then(result=>{
    console.log("All data fetched:");
    console.log(result)
})
.catch(err=>console.log("One of the tasks failed: ", err));

