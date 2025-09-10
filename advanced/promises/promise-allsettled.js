


function fetchData(id, shouldFail = false){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(shouldFail){
            reject(`Data ${id} failed`)
        }else{
            resolve(`Data ${id} fetched`);
        }
        }, Math.random() *1000 +500)
    })
}

Promise.allSettled([fetchData(1), fetchData(2, true), fetchData(3), fetchData(4, true)])
.then((result)=>{
    result.forEach((result, index)=>{
        if(result.status === 'fulfilled'){
            console.log(`Task ${index + 1}:`, result.value)
        }else{
            console.warn(`Task ${index + 1}:`, result.reason);
        }
    });
});

/*
What This Demonstrates
- All Promises run in parallel
- Promise.allSettled() waits for all to settle, regardless of success or failure
- You get a full report of outcomes: { status, value } or { status, reason }
- Ideal for non-critical tasks where partial success is acceptable (e.g. loading widgets, optional APIs)

*/