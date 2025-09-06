//write code to get array of names from given array of users
//Get back only active users
//Sort users by age descending 

const users = [
    {
        id: 1,
        name: 'Srinivas',
        isActive: true,
        age: 20
    },
    {
        id: 2,
        name: 'John',
        isActive: true,
        age: 18
    },
    {
        id:3,
        name:'Mike',
        isActive: false,
        age: 40
    }
];

//beginners approach

// const names1 = [];
// for(let i=0; i<users.length; i++){
//     names1.push(users[i].name);
// }
// console.log("names1", names1);

//second approach

// const names2 = [];
// users.forEach((user)=>{
//     names2.push(user.name);
// });
// console.log('names2', names2);


//thrid approach

// const names3 = users.map((user)=>user.name);
// console.log(names3);

//Get back only active users

// const activeUsers1 = [];
// for(let i=0; i<users.length; i++){
//     if(users[i].isActive){
//         activeUsers1.push(users[i].name);
//     };
// };
// console.log(activeUsers1);

//second approach

// const activeUsers2 = [];
// const names4 = users.filter((user)=>user.isActive).map((user)=>user.name);
// console.log(names4);

//Sort users by age descending 

const names5 = users.
sort((user1, user2)=> (user1.age< user2.age ? 1: -1))
.filter((user)=>user.isActive)
.map((user)=> user.name)
console.log("names5", names5);