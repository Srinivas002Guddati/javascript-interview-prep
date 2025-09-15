//Custom Retry Wrapper for Async Operations


function withRetry(fn, retries=3, delay=1000){
    return async function (...args) {
        for(let attempt = 1; attempt <= retries; attempt++){
            try{
                return await fn(...args);
            } catch(err){
                if(attempt === retries) throw err;
                await new Promise(res=> setTimeout(res, delay))
            }
        }
    }
}

//usage
const fetchData = async () => {
    //simulate flaky API
    if(Math.random() <0.7) throw new Error('Fail');
    return "Success";
};

const safeFetch = withRetry(fetchData, 3);
safeFetch().then(console.log).catch(console.error);
