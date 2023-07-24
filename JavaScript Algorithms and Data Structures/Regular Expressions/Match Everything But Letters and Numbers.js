/*
*let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /change/; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;
* */

// My solution
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/ig; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;
console.log(result);