/*
*function reverseString(str) {
  return str;
}

reverseString("hello");
* */

// My solution
function reverseString(str) {
    let newArr = str.split('');
    let newStr = "";
    for(let i = newArr.length -1; i >= 0; i--) {
        newStr += newArr[i]
    }
    return newStr;
}

reverseString("hello");

// Other solution
function reverseString(str) {
    return str
        .split("")
        .reverse()
        .join("");
}