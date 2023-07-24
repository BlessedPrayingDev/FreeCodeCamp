/*
*let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /change/; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;
* */

// My solution
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/ig; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;
console.log(result);