
//Max Consecutive Ones

//Input: [1,1,0,1,1,1]
//Ouptput: 3


let arr = [1, 1, 0, 1, 1, 1];

function MaxConsecutiveOnes(arr){
    let currentCount = 0;
    let maxCount = 0;

    for(let i=0; i< arr.length; i++){
        if(arr[i] == 1){
            currentCount++;
        }else{
            maxCount = Math.max(currentCount, maxCount);
            currentCount = 0;
        }
    }
    return Math.max(maxCount, currentCount);

}

console.log(MaxConsecutiveOnes(arr));