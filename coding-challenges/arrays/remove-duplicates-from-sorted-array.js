
/* Problem statement:
 Given an iteger array nums sorted in non-decreasing order, remove the duplicates in-place
 such that each unique elements appears only once. The relative order of the elements
 should be kept the same. Then return the number of unique elements in nums.

*/

let arr= [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
function removeDuplicates(arr){
    let x =0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]>arr[x]){
            x = x+1;
            arr[x] = arr[i];
        }
    }
    //if want return unique array
    return arr.slice(0, x+1);
    //return x+1;
}

console.log(removeDuplicates(arr));