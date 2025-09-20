

//New features in ES6

//let and const

//Arrow Functions


//Destructuring 


//Spread operator


//The For/of loop


//Map and Sets
/*
What is Map()?
A Map is a collection where:
- Keys can be of any type — not just strings or symbols.
- Order is preserved — it remembers the order in which keys were added.
- Size is easily accessible — via .size property.
- Built-in methods make it super convenient: .set(), .get(), .has(), .delete(), etc.

/*
Creating a Map
Map() constructor allows two ways to create a Map in JavaScript.

Passing an Array to new Map().
Create a Map and use Map.set().
*/


let anotherMap =new Map([
    ['name', 'GFG'],
    ['age', 30],
    ['city', 'Bangalore']
]);

console.log(anotherMap);

//Exmaple demonstrating all the common operations on a Map

//Create a new Map
const myMap = new Map();
// 1. set(key, value)

myMap.set('name', 'Srinivas');
myMap.set(1, 'One');
myMap.set(2, 'Two');
myMap.set(true, "Boolean True value");

console.log(myMap);

//2. get(key)

console.log(myMap.get(true));
console.log(myMap.get(1));


//3. has(key);
console.log(myMap.has('name'));
console.log(myMap.has(2));

//4. delete(key)
myMap.delete(2);
console.log(myMap);
console.log(myMap.has(2));

//5. clear();

console.log("size before", myMap.size);
myMap.clear();
console.log(myMap);
console.log('size after', myMap.size);



//Set - Sets store unique values of any type
//using an array

let s1= new Set([10, 30, 30, 40, 40]);
console.log(s1);

//using string
let s2= new Set("foood");
console.log(s2);

//an empty set

let s3= new Set();
console.log(s3);

//adding elements

let mySet = new Set();

//add elements

mySet.add(23);
mySet.add(13);

console.log(mySet);

//Delete items 

mySet.delete(13);
console.log(mySet);

//Clear items

let mySet1 = new Set();
mySet1.add(25);
console.log(mySet1);
console.log(mySet.size);
console.log(mySet1.clear());



//Set.entries();

let s4= new Set();
s1.add("Bengalure");
s1.add("Hyderabad");
s1.add('Vizag');

//Creating an iterator object
const setIterator = s1.entries();
console.log('setIterator', setIterator);
console.log(setIterator.next().value);
console.log(setIterator.next().value);

// has() method

console.log(s1.has('Bengalure'));

//Set.values();
const s5= new Set();
s5.add(10)
s5.add(20);
s5.add(60);
console.log("s5", s5.values());
const setIterator1 = s5.values();
console.log(setIterator1.next().value);
console.log(setIterator1.next().value);
console.log(setIterator1.next().value);


//Set.keys();

let placeSet = new Set();
placeSet.add("India");
placeSet.add("America");
placeSet.add('Bengalore');

const setIterator3 = placeSet.keys();
console.log(setIterator3);


//Classes


//Promises


//Default Parameters


//Additional Enhancements 



