/*
*let repeatNum = "42 42 42";
let reRegex = /change/; // Change this line
let result = reRegex.test(repeatNum);
* */

// My solution
let repeatNum = "42 42 42";
let reRegex = /(\d+) \1 \1/g; // Change this line
let result = reRegex.test(repeatNum);
console.log(result);
console.log(repeatNum.match(reRegex));

// Solution
let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/;
let result = reRegex.test(repeatNum);