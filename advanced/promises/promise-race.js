
//Race - resolves/rejects as soon as any one Promise settles

function fetchFromServer(name, delay, shouldFail = false){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(shouldFail){
                reject(`${name} failed`);
            }else{
                resolve(`${name}, responded`);
            }
        }, delay);
    });
}

//Simulate two competing servers

const serverA = fetchFromServer('Server A', 1200);
const serverB = fetchFromServer("Server B", 600, true);
Promise.race([serverA, serverB])
.then((result)=> console.log("Winner ", result))
.catch(err=> console.log("First to fail:", err));