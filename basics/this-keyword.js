"use strict";


//this in global space

console.log(this); //globalObject -window or global(nodejs)

//this inside a function
//the value depends on strict /non strict mode
 function x(){
    console.log(this);
 }
//this is strict mode - (this substitution)

//if the vlaue of this keyword is undefined or null
//this keyword will be replaced with globalObject
//only in non strict mode

//this keyword value depends on how the function is called
x();
//window.x();


//this inside a object's method
 const obj ={
    a:10,
    x: function(){
        console.log(this.a);
    }
 }

 obj.x();
//call apply bind methods (sharing/borrowing methods)

const student ={
    name:'Srinivas',
    printName: function(){
        console.log(this.name);
    }
}
const student1 = {
    name: 'Raju'
};

student.printName.call(student1);
//this inside arrow function
//Enclosing lexical context
const obj3 ={
    a:20,
    x: function(){
        const y=()=>{
            console.log('this', this);
        }
        y();
    }
}
obj3.x();
//this inside nested arrow function


//this inside DOM
//this inside DOM elements => reference to HTMLelement

//this inside class and constructors
