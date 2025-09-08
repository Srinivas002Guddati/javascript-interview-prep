

/*
Currying is a powerful concept in JavaScript (and functional programming in general) that transforms a function with multiple arguments into a series of functions, each taking one argument at a time.

Definition:
Currying is the process of converting a function f(a, b, c) into f(a)(b)(c).

Instead of passing all arguments at once, you pass them one by one—each call returns a new function waiting for the next argument.

*/

//Example 1

//Normal function
function add(a, b){
    return a+b;
}

//Curried version
function curriedAdd(a){
    return function(b){
        return a+b;
    }
}

const addFive = curriedAdd(5);
console.log(addFive(4));

//Using arrow functions
const add1 = a => b=> a+b;
console.log(add1(5)(3));


//Example 2
//Question -1 - sum(2)(6)(1);

function sum(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}
console.log(sum(2)(6)(1));

//Examplel 3
/*
 evaluate("sum")(4)(2)=> 6
 evaluate("multiply")(4)(2)=> 12
 evaluate("divide")(4)(2)=> 2
 evaluate("mu")
*/

function evaluate(operation){
    return function(a){
        return function(b){
            if( operation === 'sum') return a+b;
            else if(operation === 'multiply') return a*b;
            else if(operation === 'divide') return a/b;
            else if(operation === 'substract') return a-b;
            else return "Invalid"
        }         
    }
};

console.log(evaluate('sum')(2)(5));
console.log(evaluate('multiply')(4)(4));

console.log(evaluate('substract')(5)(5));

//Example 4

//Infinite currying - sum(1)(3)(8)....(n)

function add(a){
    return function(b){
        if(b) return add(a+b);
        return a;
    };
}
console.log(add(5)(2)(4)(8)());

//Example 5

// Currying vs partial application

//Convert f(a, b, c) to f(a)(b)(c)