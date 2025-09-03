/*
Definition:
Destructuring assignment is a JavaScript expression that enables unpacking values from arrays or properties from objects into separate variables.


Why It is useful:
- It simplifies code that accesses nested data
- Reduces boilerplate like const name = user.name
- Makes function parameters cleaner and more expressive

*/


// Nested object destructuring with defaults

const user = {
    profile: {
        name:'Srinivas',
        contact:{
            email: 'srinivas@example.com'
        }
    }
};

const { profile: {
    name, contact: {
        email, address = "chinnappa layout"
    }
}} = user;
console.log(name, email, address);

//Deep destructuring with aliases

const game = {
    title: 'Final Fantasy VII',
    platform: 'PlayStation',
    characters: {
        protogonist: {
            name: 'Cloud Strife',
            weapon: 'Buster Sword',
        },
        antagonist:{
            name: 'Sephiroth',
            weapon: 'Masamune'
        }
    }
};

const { title, characters: { 
    protogonist: {
        name: heroName, weapon: heroWeapon
    },
    antagonist:{
        name: villanName
    }
}} = game;

console.log(title, heroName, heroWeapon, villanName );


//Destructuring with defaults and missing keys

const users = {
  profile: {
    name1: "Srinivas",
    contact: {
      email1: "srinivas@example.com"
    }
  }
};

const {
  profile: {
    name1,
    contact: {
      email1,
      phone = "Not Provided"
    }
  },
  location = "Remote"
} = users;

console.log(name1, email1, phone, location);

//Deep destructuring with Rest operator

const config = {
    server: {
        host: "localhost",
        port: 8080,
        Credentials: {
            username: "admin",
            password: "secret"
        }
    },
    features: {
        logging: true,
        monitoring: false
    }
};

const { server:{
    host,
    Credentials:{
        username
    },
    ...restServer
},
features:{
    logging
}
 } = config;

 console.log(host, username, restServer, logging);

 //Destructuring in function parameter

 const appData = {
    user2: {
        profile1:{
            name2:'Srinivas',
            role:'technical lead'
        },
        settings: {},        
    },
    version: '1.2.3'
 };

 function setupApp({
    user2:{
        profile1:{
            name2, 
            role
        },
        settings:{
            theme ="light"
        },
        version
    }
 }){
    console.log(`${name2} ${role} is using ${theme} theme on v${version}`);
 }

 setupApp(appData);


 //Nested arrays with skipping and defaults

 const data = [
  ["React", "NodeJS"],
  ["MongoDB", "Golang"],
  ["AWS"]
];

const [ [frontend, backend],
[, systems],
[
    cloud ="Azure"
]
] = data;
console.log(frontend, backend, systems, cloud);

//Destructuring inside a loop

const user3 = [
  ["Srinivas", "Technical Lead"],
  ["Amit", "Frontend Developer"],
  ["Neha", "Backend Developer"]
];

for(const [name, role] of user3){
    console.log(`${name} is a ${role}`);
}


//Deep Destructuring with Rest Operator

const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

const [ [firtRowFirst, ...firstRowRest],
[, secondRowSecond],
[,,thirdRowThird] ] = matrix;
console.log(firtRowFirst, firstRowRest, secondRowSecond, thirdRowThird);