

/*
The bind() method in JavaScript is used to create a new function with a specific this value and optional preset arguments. Unlike call() and apply(), which invoke the function immediately, bind() returns a new function that you can call later.

*/

const user ={
    name: 'Srinivas',
    greet: function(){
        console.log(`Hello, ${this.name}`);
    }
};

const greetLater = user.greet.bind(user);
setTimeout(greetLater, 5000);