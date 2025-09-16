

/*
Strict mode is a restricted variant of JavaScript that eliminates silent errors, disallows certain syntax, and makes your code more secure and easier to optimize.
You enable it by adding "use strict"; at the top of a file or function

*/

//Global scope

"use strict";
x =3.22; //ReferenceError: x is not defined

//Function scope

function demo(){
    "use strict";
    y = 2.25; //ReferenceError: y is not defined
}