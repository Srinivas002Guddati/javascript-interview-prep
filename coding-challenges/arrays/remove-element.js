
/*

Given an iteger array nums and an integer val, remove all occurrences of val in nums in-place.
the order of the elements may be changed. Then return the number of elements in nums wich are not equal to val.
*/

let arr = [2,3,3,3,1,1];
let val = 3;

function removeElements(arr, val){
    let x = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] != val){
            arr[x] = arr[i];
            x = x+1
        }
    }
    return x;
}

console.log(removeElements(arr));