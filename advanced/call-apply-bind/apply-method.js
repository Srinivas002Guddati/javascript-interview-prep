

/*
Defination:
The apply() method in JavaScript is a powerful way to invoke a function immediately while explicitly setting the value of this—just like call()—but with one key difference: you pass the arguments as an array.

*/

//Syntax
//func.apply(thisArg, [arg1, arg2, ..., argN]);

//Example 1

const person = {
  fullName: function(city, country) {
    return `${this.firstName} ${this.lastName}, ${city}, ${country}`;
  }
};

const person1 = { firstName: "Srinivas", lastName: "G" };
const result = person.fullName.apply(person1, ["Bengaluru", "India"]);
console.log(result); // Srinivas G, Bengaluru, India
