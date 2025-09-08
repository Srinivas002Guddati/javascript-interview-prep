

/*
The call() method is a built-in function available on all JavaScript functions. It allows you to invoke a function immediately and explicitly set the value of this inside that function.

*/
//Syntax:

//fun.call(thisArg, arg1, arg2, ..., argN);

//Example 1

const person = {
    fullName: function(city, country){
        return `${this.firstName} ${this.lastName}, ${city}, ${country}`;
    }
};

const person1 = { firstName: 'Srinivas', lastName:'G'};
const person2 = { firstName: 'Ada', lastName: 'Lovelace'};

console.log(person.fullName.call(person1, "Bengalore", "India"));
console.log(person.fullName.call(person2, 'Hyd', 'India'));

/*
Why Use call()?
- Method borrowing: Use a method from one object on another.
- Dynamic context binding: Control what this refers to.
- Immediate execution: Unlike bind(), call() runs the function right away.
*/

//Example 2
function Product(name, price){
    this.name = name;
    this.price = price;
}

function Food(name, price){
    Product.call(this, name, price);
    this.category = 'food';
};

const cheese = new Food("Cheddar", 5);
console.log(cheese);

//Example 3

const nameFormatter = {
    formatName: function(title, suffix){
        return `${title} ${this.firstName} ${this.lastName} ${suffix}`;
    }
}

const user1 = {
  firstName: "Srinivas",
  lastName: "G"
};

const user2 = {
  firstName: "Ada",
  lastName: "Lovelace"
};

//Borrowing formatName using call()

const formatted1 = nameFormatter.formatName.call(user1, "Mr.", "PhD");
const formatted2 = nameFormatter.formatName.call(user2, "Ms.", "MSc");
console.log(formatted1);
console.log(formatted2);

/*
Why This Is Useful
- Method reuse: No need to duplicate formatName in every object.
- Dynamic context binding: You control which object this refers to.
- Immediate execution: Unlike bind(), call() runs the function right away.
*/

//Example 4

function logActivity(action, timeStamp){
    console.log(`[${timeStamp}] ${this.role}, ${this.name} performed: ${action}`);
}

const admin = {
  name: "Srinivas",
  role: "Admin"
};

const guest = {
  name: "Visitor",
  role: "Guest"
};

const member = {
  name: "Ada",
  role: "Member"
};

//Resuing logActivity with diff contexts 
console.log(logActivity.call(admin, "deleted a post", "2025-09-08, 10:00AM"));
console.log(logActivity.call(guest, "viewed a page", "2025-09-08, 10:05AM"));
console.log(logActivity.call(member, "commented", "2025-09-08, 10:55AM"));

