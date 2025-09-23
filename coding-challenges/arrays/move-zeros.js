

//Move zero's 
//Output should be: [ 1, 2, 3, 0, 0 ]

const arr = [ 0, 1, 2, 0, 3];

function moveZeros(arr){
    let x = 0;
    for(let i = 0; i< arr.length; i++){
        if(arr[i] !== 0){
            arr[x] = arr[i];
            x++;
        }
        console.log(x);
    }
    for(let i = x; i< arr.length; i++){
            arr[i] = 0;
    }
    
    return arr;
}

console.log(moveZeros(arr));