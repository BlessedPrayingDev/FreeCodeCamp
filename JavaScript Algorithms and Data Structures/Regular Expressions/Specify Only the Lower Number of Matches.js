/*
*let haStr = "Hazzzzah";
let haRegex = /change/; // Change this line
let result = haRegex.test(haStr);
* */

// My solution
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/g; // Change this line
let result = haRegex.test(haStr);
console.log(result)