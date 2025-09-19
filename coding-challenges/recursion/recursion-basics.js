
/* What is Recursion:
    Function calls itself to solve smaller versions of the same problem.

    Two parts of Recursion:

    1 - Base case: stop calling itself(when to stop calling itself)
    2 - Recursive case: part where function calls itself
*/

//Print n to 1 using recursion

function print(n){

    if(n == 0) return;
    //console.log(n);
    print(n-1);
}

print(5);


//Print 1 to n using recursion
let n = 5;
function print1(x){

    if(x > n) return;
    //console.log(x);
    x = x+1;
    print1(x);
}

print1(1);

/*
Common Mistakes of Recursion:
 1: Missing Base case - Stack overflow
 2: Not simplyfying the input - never reaches base case
 3: Too deep recursion - large inputs
 4: Keeping in mind the time complexity
*/

/*
When to use Recursion:
1: Problem can be broken into sub problems
2: Tree & Graphs
3: Backtracking, DP, Divide & Conquer
*/

//Sum of first n numbers
//5 + 4 + 3 + 2+ 1 = 15;

function sum(n){

    if(n == 0) return 0;
    return n + sum(n-1);
}

// console.log(sum(5));


//Sum of all elements in an Array

let arr = [5, 3, 2, 0, 11];

function sumOfArray(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum = sum + arr[i]
    }
    return sum;
}

//console.log(sumOfArray(arr));

//Using recursion

function sumArray(n){
    
    if(n == 0) return arr[0];
 return arr[n] + sumArray(n-1);
   
}
console.log(sumArray(arr.length - 1));

