

// map();

const { jsx } = require("react/jsx-runtime");

// Array.map((element, index, array)=>{
//     //return transformed element;
// });

//Example double the array elements;

const numbers = [1,2,3,4];
 const output = [];
for(let i=0; i<numbers.length; i++){
    output.push(numbers[i] * 2);
};

console.log('output', output);

//OR using map() method

const output1 = numbers.map((num)=> num*2);
console.log(output1);

//Exampel 2

const users = [
    {firstName: 'Srinivas', lastName: 'G'},
    {firstName: 'Santhi', lastName: 'A'},
    {firstName: 'Ada', lastName: 'loveLace'}
];
//output should be ["Srinvas G", "Santhi A", "Ada loveLace"];

const result =users.map((user)=> `${user.firstName} ${user.lastName}`);
console.log(result);

//OR 

const output3 = [];
const results = users.forEach((user)=>{
    output3.push(`${user.firstName} ${user.lastName}`)
});

console.log('output3', output3);

//Find the active users in below array
const users3 = [
  { name: "Srinivas", active: true },
  { name: "Ada", active: false },
  { name: "Linus", active: true }
];

//implementation
const activeUsers = users3.filter((user)=>user.active).map((active)=>active.name);
console.log(activeUsers);

//alternative implementation
const resultArr = []
for(let i=0; i<users3.length; i++){
    if(users3[i].active === true){
        resultArr.push(users3[i].name)
    }
}

//alternative implementation

const resultArr1 = [];
const result4 = users3.forEach((user)=>{
    if(user.active === true){
        resultArr1.push(user.name)
    }
})

console.log('resultArr1', resultArr1);

//alternative implementation

// const activeUsers5 = users3.reduce((acc, user)=>{
//     if(user.active) acc.push(user.name);
// },[]);

//Example 3

//You are given an array of user objects, each containing a name, a list of roles, and an active status. Write a function that transforms this array into a new array of objects with the following structure:

const result5 = [
  { name: "Srinivas", roles: ["admin", "editor"], active: true },
  { name: "Ada", roles: ["viewer"], active: false },
  { name: "Linus", roles: ["editor"], active: true }
];

//Output:
[
  { username: "SRINIVAS", isEditor: true, status: "active" },
  { username: "ADA", isEditor: false, status: "inactive" },
  { username: "LINUS", isEditor: true, status: "active" }
]

const transformed = result5.map((obj)=>({
    username: obj.name.toUpperCase(),
    isEditor: obj.roles.includes("editor"),
    status: obj.active ? "active": "inactive"
}));

console.log('transformed', transformed);


//Exmaple 3

//You are given an array of student scores. Write a function that transforms this array into a new array of objects, where each object contains:

const scores = [85, 92, 78, 99];

const transformedObj = scores.map((score, index)=>({
    id: `student-${index +1}`,
    score,
    grade: score >= 90 ? "A": score >=80 ? "B": "C"
}));
console.log("transformedObj", transformedObj);jsx

//Example 4

//You are given an array of user objects. Each object may or may not contain an email field. Write a function that returns a new array containing the email addresses of all users. If a user does not have an email, use the default value 'no-email@domain.com'. Use the map() method to implement this transformation.

const users6 = [
  { name: "Srinivas", email: "srinivas@example.com" },
  { name: "Ada" }, // missing email
  { name: "Linus", email: null }
];

//expected output:
[
  "srinivas@example.com",
  "no-email@domain.com",
  "no-email@domain.com"
]


const result6 = users6.map(user=> user.email ? user.email: 'no-email@domain.com');
console.log(result6);

const result7 = users6.map(user=> user.email ?? "no-email@domain.com");
console.log('result7', result7);

//Example 5

//You are given an array of product objects, each with an id and name. Separately, you have an object that maps product IDs to their prices. Write a function that returns a new array of products, where each product includes its price from the lookup object. If a product ID is not found in the lookup, assign the price as 'Price not available'. Use the map() method to implement this transformation."

// const products = [
//   { id: 1, name: "Laptop" },
//   { id: 2, name: "Phone" },
//   { id: 3, name: "Tablet" }
// ];

// const prices = {
//   1: 1000,
//   2: 500
// };

// const enrichedProducts = products.map(product => ({
//   ...product,
//   price: prices[product.id] ?? "Price not available"
// }));


// console.log(enrichedProducts);

//Example 6

//You are given an array of category objects. Each category contains a name and an array of skills. Write a function that returns a flat array of strings, where each string combines the category name and the skill (e.g., 'Frontend: React'). Use flatMap() to implement this transformation.

//Implement example 6