/*
*let favWord = "favorite";
let favRegex = /change/; // Change this line
let result = favRegex.test(favWord);
* */

// My solution
let favWord = "favourite";
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);
console.log(result);