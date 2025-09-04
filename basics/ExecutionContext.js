// Global Execution Context starts here
var x = 10;

function multiply(num) {
  // Function Execution Context starts when multiply is called
  var result = num * 2;
  return result;
}

var output = multiply(x); // Function Execution Context is created
console.log("Output:", output); // Output: 20


/*
- When the script runs, the Global Execution Context (GEC) is created.
- Variables x, multiply, and output are hoisted.
- When multiply(x) is called:
- A Function Execution Context (FEC) is created for multiply
- num is assigned 10
- result is calculated and returned
- After execution, the FEC is popped off the call stack

*/

/*
- [JavaScript Visualizer by ui.dev](https://ui.dev/javascript-visualizer):  
  A powerful tool to visualize how JavaScript code runs under the hood — including execution context, hoisting, and closures. Great for interview prep and debugging mental models.
*/