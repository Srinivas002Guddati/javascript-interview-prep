
var a;

console.log(a);  //undefined

a = 10;

console.log(10);


try{
    console.log(b);
} catch(err){
    console.log("Error", err.message);
}

console.log(c); // ReferenceError: c is not defined

/*
 undefined:
- A variable is declared but not assigned a value.
- JavaScript assigns undefined during the memory allocation phase.
- Safe to access — won’t crash your code.

 not defined:
- A variable is never declared in any accessible scope.
- Accessing it throws a ReferenceError.
- Happens when you mistype or forget to declare a variable.

*/