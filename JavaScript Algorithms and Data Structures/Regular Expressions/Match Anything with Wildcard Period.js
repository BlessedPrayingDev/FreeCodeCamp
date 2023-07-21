/*
*let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /change/; // Change this line
let result = unRegex.test(exampleStr);
* */

// My solution
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/g; // Change this line
let result = unRegex.test(exampleStr);