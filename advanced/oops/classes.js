
/*
JavaScript classes (introduced in ES6) are syntactic sugar over its prototypal inheritance model. They provide a cleaner, more familiar way to define constructor functions, methods, inheritance, and encapsulation.
*/

class Person{
    constructor(name, age){
        this.name = name;
        this.age= age;

    }
    greet(){
        return `Hi, I'm ${this.name}, ${this.age} yars old.`;
    }
}

const p1 = new Person("Srinivas", 30);

console.log(p1.greet());
console.log(p1.name, p1.age);



//Inheritance with extends and super key words

class Student extends Person {
    constructor(name, age, course){
        super(name, age); //calls person's constructor
        this.course = course;
    }
    study(){
        return `${this.name } is studying ${this.course}`;
    }
    greet(){
        const baseGreet = super.greet();
        return `${baseGreet} and I'm studying ${this.course}`;
    }
}

const s1 = new Student("John", 30, "Js");
//console.log(s1.greet());

//Exmaple 2
class Person1 {
    name;
    constructor(name){
        this.name = name;
    }
    introduceSelf(){
        console.log(`Hi! I'm ${this.name}`);
    }
}

const srini = new Person1("Srini");
console.log(srini.introduceSelf());

//Ommitting constructor

class Animal {
    sleep(){
        console.log("zzzzz");
    }
}

const spot = new Animal();
spot.sleep();

//Inheritance 
class Professor extends Person {
    constructor(name, teaches){
        super(name);
        this.teaches = teaches;
    }
    introduceSelf(){
        console.log(`My name is ${this.name}, and I will be your ${this.teaches}`);
    }
    grade(paper){
        const grade =Math.floor(Math.random() * (5-1) + 1);
        console.log(grade);
    }
}

const p2 = new Professor("Nag", "Psychology");
console.log(p2.introduceSelf());
console.log(p2.grade("my paper"));

//Encapsulation

class Student1 extends Person{
    #year
    constructor(name, year){
        super(name);
        this.#year = year;
    }
    introduceSelf(){
        console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}`);
    }
    canStudyArchery(){
        return this.#year >1;
    }
}

const summers = new Student1("Smmers", 2);
console.log(summers.introduceSelf());
console.log(summers.canStudyArchery());


//Private methods
class Example {
    somePublicMethod(){
        this.#someprivateMethod();
    }
    #someprivateMethod(){
        console.log("You called me?");
    }
}

const e1 = new Example();
console.log(e1.somePublicMethod());
//console.log(e1.#somePrivateMethod());


