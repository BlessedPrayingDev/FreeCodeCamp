/**
 * let sampleWord = "astronaut";
 * let pwRegex = /change/; // Change this line
 * let result = pwRegex.test(sampleWord);
 *
 */

// My solution
let sampleWord = "astronaut";
let pwRegex =  /(?=\w{6})(?=\w*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);
console.log(result)