
/*
An object in JavaScript is a data structure used to store related data collections. It stores data as key-value pairs, where each key is a unique identifier for the associated value. Objects are dynamic, which means the properties can be added, modified, or deleted at runtime.

There are two primary ways to create an object in JavaScript: Object Literal and Object Constructor.
*/

//Creating using object literal

let obj = {

    name: 'Srinivas',
    age: 30,
    job: 'Developer'
}
console.log(obj);

//Creating object using new Object() constructor

let obj1 = new Object();
obj1.name = "Srinivas";
obj1.age = 20;
obj1.job = 'Developer'
console.log(obj1);

console.log(typeof obj1);

//Accessing object properties - dot notation or bracket []

let obj3 = { 
    name: 'Santhi',
    age: 28
}
console.log(obj.name);
console.log(obj["age"]);

//Modifying object properties 

obj3.age = 23;
console.log(obj3);
obj3.color = "Red";
console.log(obj3);

//Removing properties from an object
delete obj3.color;

console.log(obj3);

//Checking if a property exists
let obj4= { model: "Hondia"}
console.log(obj4.hasOwnProperty("model"));

//Iterating through object properties
//Use for..in loop to iterate through the properties of an object


let obj5 = {name: 'Srinivas', age: 31};
for(let key in obj5){
    console.log(key + ": " + obj5[key]);
};

//Merging objects
let obj6 = { name:"Ram"};
let obj7 = { age: 40};
let obj8 = { ...obj6, ...obj7 };

console.log(obj8);

let obj9 = {name: 'Srinivas', age: 31};
console.log(Object.keys(obj9).length);
console.log(Object.values(obj9));


//how to check whether a value is an object or not
let obj10 = [];
console.log(typeof obj10 === "object" && obj10  !== null);