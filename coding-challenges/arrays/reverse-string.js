

//Reverse String


//input : s= ["h", "e", "l", "l", "o"]
//output: ["o", "l", "l", "e", "h"];

let s = ["h", "e", "l", "l", "o"];

function reverseString(s){

    let len = s.length;
    let halfLength = Math.floor(len/2);
    for(let i=0; i<halfLength; i++){
        temp = s[i];
        s[i] = s[len-1-i];
        s[len-1-i] = temp;
    }
    return s;
}

console.log(reverseString(s));