/*
*function quickCheck(arr, elem) {
  // Only change code below this line

  // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
* */

// My solution
function quickCheck(arr, elem) {
    // Only change code below this line
    if(arr.indexOf(elem) == -1) {
        return false
    } else {
        return true;
    }
    // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

// Other solutions
function quickCheck(arr, elem) {
    return arr.indexOf(elem) != -1;
}
console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));

function quickCheck(arr, elem) {
    return arr.indexOf(elem) >= 0 ? true : false;
}
console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));