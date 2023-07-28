/*
* let hello = "   Hello, World!  ";
let wsRegex = /change/; // Change this line
let result = hello; // Change this line
* */

// My solution
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ""); // Change this line