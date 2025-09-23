

//Example input: [ 3, 0, 1];

// output: 2
let arr = [3, 0, 1, 4, 6, 2];
function missingNumber(arr){
    let n = arr.length;
    let totalSum = n * (n+1) / 2;
    let partialSum = 0;
    for(let i=0; i< arr.length; i++){
        partialSum = partialSum + arr[i];
    }

    return totalSum - partialSum;
}

console.log(missingNumber(arr));