

/*
In JavaScript, every object has an internal link to another object called its prototype. This prototype acts as a shared blueprint from which the object can inherit properties and methods.

*/

/*
Prototype Chain
When you access a property or method on an object:
- JavaScript first checks the object itself.
- If not found, it looks up the object's prototype.
- This continues up the prototype chain until it finds the property or reaches null

*/

//Example 1:

// const person = {
//     greet(){
//         console.log("Hello!");
//     }
// };

// const student = Object.create(person)
// student.name = "Srinivas";
// console.log(student.greet());

/*
Why Use Prototypes?
- Memory efficiency: Shared methods live in one place.
- Inheritance: Objects can inherit behavior without duplication.
- Extensibility: You can add methods to built-in types like Array.prototype.

*/

//Example- using constructor fun

function Car(model, year){
    this.model = model;
    this.year = year;
};

//Add shared method via prototype
Car.prototype.drive = function(){
    console.log(`Driving the ${this.model} from ${this.year}`);
};

//Create instaces

const car1 = new Car("Mustang", 1964);
const car2 = new Car("Corolla", 1966);
car1.drive();
car2.drive();

//Questions
//What is a prototype in js?
//A prototype is an object that other objects inherit properties and methods from. Every JavaScript object has an internal link to its prototype, forming a prototype chain.

//Example:
function User(name){
    this.name = name;
}

User.prototype.sayHi = function(){
    console.log(`Hi, I'm ${this.name}`);
}
const user1 = new User("Srinivas");
console.log(user1.sayHi());
const user2 = new User("John");
console.log(user2.sayHi());

//Here, sayHi is shared across all instances of User.


//Example 2
//What is the difference between __proto__ and prototype?

//prototype: A property of constructor functions. Used to define shared methods
//__proto__: A hidden property of objects that points to their prototype.

function Car(){
}
const c1 = new Car();
console.log(c1.__proto__ === Car.prototype)

//Multi level inheritance
function Organism(){
    this.alive = true;
}

Organism.prototype.breathe = function(){
    return "Breathing...";
}

function Animal(name){
    Organism.call(this);
    this.name = name;

}

Animal.prototype = Object.create(Organism.prototype);
Animal.prototype.constructor = Animal;

Animal.prototype.eat = function(){
    return `${this.name} is eating.`;
}

function Dog(name, breed){
    Animal.call(this, name);
    this.breed = breed;
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

//Override breathe method (shadowing)
Dog.prototype.breathe = function(){
    return `${this.name} the ${this.breed} pants heavily.`;
}

const myDog = new Dog("Bruno", "Labrador");

console.log(myDog.breathe());
console.log(myDog.eat());
console.log(myDog.alive);


//Example - 2-leve inheritance
function Person(name, age){
    this.name =name;
    this.age = age;
}

Person.prototype.introduce = function(){
    return `Hi , I'm ${this.name}, and my age is ${this.age}`;
}

function Student(name, age, course){
    Person.call(this, name, age);
    this.course = course;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
//or
// Object.setPrototypeOf(Student.prototype, Person.prototype);
// Student.prototype.constructor = Student;

Student.prototype.study = function(){
    return `${this.name} ${this.course}`;
}

const s1 = new Student("Srinivas", 29, "Computers");
console.log(s1.study());
console.log(s1.introduce());