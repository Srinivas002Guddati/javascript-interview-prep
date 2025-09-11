

/*
It’s a control structure that lets you handle runtime errors gracefully instead of letting them crash your script. You “try” some code, and if it throws an error, you “catch” it and decide what to do.

*/


//Example 1 - No error

// try{
//     console.log("Start of try runs");
//     console.log("End of try runs");
// } catch(err){
//     console.log("Catch is ignored")
// }

//Example 2

// try{
//     console.log("Start of try runs");
//     dsfdf;
//     console.log("End of try runs");
// } catch(err){
//     console.log("Error has occurred!", err);
// };

// try{
//     lasda;
// } catch(err){
//     console.log(err.name);
//     console.log(err.message);
//     console.log(err.stack);
// }

//Example 3  - Throwing custom errors

let json = { "age": 30};

try {
    let user = JSON.parse(json);
    if(!user.name){
        throw new SyntaxError("Incomplete data: no nmae");
    }
} catch(err){
    console.log("JSON Error: ", error);
}