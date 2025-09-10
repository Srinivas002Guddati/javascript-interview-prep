

//Any - resolves with the first fulfilled Promise; rejects only if all fail

function fetchFromCDN(name, delay, shouldFail= false){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(shouldFail){
                reject(`${name} failed`);
            }else{
                resolve(`${name} responded`);
            }
        }, delay);
    });
}

const cdnA = fetchFromCDN('CDN-A', 1000);
const cdnB = fetchFromCDN('CDN-B', 100);
const cdnC = fetchFromCDN('CDN-C', 1200);

Promise.any([cdnA, cdnB, cdnC])
.then(result => console.log("Frist success", result))
.catch(err => console.log("All failed", err));