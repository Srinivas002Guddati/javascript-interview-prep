
/*
A generator function is a special type of function that can pause its execution at any point and resume later. They are defined using the function* syntax and use the yield keyword to pause execution and return a value.
*/

function* generatorFun(){
    yield 'Hello';
    yield 'World';
    return 'Done';
}

const generator = generatorFun();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
