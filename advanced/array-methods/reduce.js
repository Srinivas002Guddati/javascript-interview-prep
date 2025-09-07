// The reduce() method in JavaScript is a powerful array function that condenses an array into a single value by applying a callback function to each element, one at a time


// Array.reduce((accumulator, currentValue, currentIndex, array)=>{
//     // return updated accumlator
// }, initialValue);

//Example 1
//Sum of nummbers

const numbers = [ 1,2,3];
const sum = numbers.reduce((acc, num)=> acc + num, 0);

//console.log(sum);

function sum1(numbers){
    let sum = 0;
    for(let i=0; i<numbers.length; i++){
        sum = sum + numbers[i];
    }
    return sum;
}
//console.log("sum", sum1(numbers));

//Example 2
//Count Active users

const users = [
  { name: "Srinivas", active: true },
  { name: "Ada", active: false },
  { name: "Linus", active: true }
];

const activeUsers = users.reduce((acc, user)=> acc + (user.active ? 1 : 0), 0);

// console.log(activeUsers);

//Example 3
//You are given an array of transaction objects. Each transaction contains a type ('credit' or 'debit') and an amount. Write a function using reduce() that returns an object summarizing:

const transactions = [
  { type: "credit", amount: 1000 },
  { type: "debit", amount: 300 },
  { type: "credit", amount: 700 },
  { type: "debit", amount: 200 }
];

const result =transactions.reduce((acc, txn)=>{
    if(txn.type === "credit"){
        acc.credit = acc.credit + txn.amount;
    }else if(txn.type === 'debit'){
        acc.debit = acc.debit + txn.amount;
    }acc.netBalance = acc.credit- acc.debit;
    return acc;
}, { credit:0, debit: 0, netBalance: 0});

//console.log(result);

//Example 3
//You are given an array of product objects. Each product has a name, category, and price. Write a function using reduce() that groups the products by category and returns an object where each key is a category name and its value is an array of products in that category.

const products = [
  { name: "Laptop", category: "Electronics", price: 1000 },
  { name: "Phone", category: "Electronics", price: 500 },
  { name: "Shirt", category: "Apparel", price: 40 },
  { name: "Shoes", category: "Apparel", price: 60 },
  { name: "Book", category: "Stationery", price: 20 }
];

const productResult = products.reduce((acc, product)=>{
    if(product.category === 'Electronics'){
        acc.Electronics.push(product)
    }else if(product.category === 'Apparel'){
        acc.Apparel.push(product);
    }else if(product.category === 'Stationery'){
        acc.Stationery.push(product);
    }
    return acc;
},{
    Electronics: [],
    Apparel: [],
    Stationery:[]
});

//console.log('productResult',productResult);

//Dynamic approach
const result2 = products.reduce((acc, product)=>{
    const { category } = product;
    if(!acc[category]){
        acc[category] = [];
    }
    acc[category].push(product);
    return acc;
},{});

console.log(result2);