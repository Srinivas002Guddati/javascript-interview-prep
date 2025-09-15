

//Reusing a Generic Function Across Objects

const dev = { name: 'Srinivas'};
const designer = { name: 'Meera'};

function introduce(role, location){
    console.log(`${this.name} is a ${role} based in ${location}.`);

};

//using call
introduce.call(dev, 'Technical Lead', 'Bangalore');
introduce.apply(designer, ['UX Designer', "Bangalore"]);

//Example: Borrowing Methods from Native Prototypes

// const args = [ 1,2,3];

// function sum(){
//     return Array.prototype.reduce.apply(arguments, (acc, val)=> acc+val, 0)
// }

// console.log(sum.apply(null, args));

//Example: Logging with Context Injection

function logAction(action){
    console.log(`[${this.module} ${action}]`);
}

const authModule = { module: "Auth"};
const uiModule = { module: 'UI'}

logAction.call(authModule, "User login");
logAction.call(uiModule, "Button cliked");