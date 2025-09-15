

/*
Event bubbling and capturing are two phases of event propagation in the DOM—how events travel through nested elements when triggered. Understanding them is key to mastering UI behavior, especially in complex component trees or micro-frontends.

*/

// document.querySelector("#granparent")
// .addEventListener("click", ()=>{
//     console.log("Grandparent clicked")
// }, true);

// document.querySelector("#parent")
// .addEventListener("click", ()=>{
//     console.log("Parent clicked")
// }, true);

// document.querySelector("#child")
// .addEventListener("click", ()=>{
//     console.log("child clicked")
// }, true);