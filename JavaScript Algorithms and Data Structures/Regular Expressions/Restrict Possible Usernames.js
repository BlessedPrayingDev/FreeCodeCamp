/*
*let username = "JackOfAllTrades";
let userCheck = /change/; // Change this line
let result = userCheck.test(username);
* */

// My solution


// Solution
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let result = userCheck.test(username);
console.log(result)