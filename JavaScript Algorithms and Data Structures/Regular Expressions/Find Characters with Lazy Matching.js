/*
* let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*>/; // Change this line
let result = text.match(myRegex);
* */

// My solution
let text = "<h1>Winter is coming</h1>";
let myRegex = /<[a-z0-9]*?>/; // Change this line
let result = text.match(myRegex);
let result2 = myRegex.test(text);
console.log(result)
console.log(result2)

// Solution
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // it's the answer!
let result = text.match(myRegex);