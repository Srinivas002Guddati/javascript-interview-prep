

const privateCounter = () => {
    let count =0;

    return {
        increment: (val = 1)=>{
            count= count+val
        },
        getValue: ()=>{
            return count;
        }
    }
};

const counter = privateCounter();
console.log(counter.getValue());
counter.increment();
console.log(counter.getValue());

//console.dir(counter.getValue());

//example 2

const privateSecret = () => {
    const secret = "foo";
    return ()=> secret;
}

const getSecret = privateSecret();
console.log(getSecret());