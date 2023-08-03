/*
*function repeatStringNumTimes(str, num) {
  return str;
}

repeatStringNumTimes("abc", 3);
* */

// My solution
function repeatStringNumTimes(str, num) {
    let newStr = "";
    if(num <= 0) {
        return ""
    } else {
        for(let i = 1; i <= num; i++) {
            newStr += str
        }
    }
    return newStr;
}

repeatStringNumTimes("abc", 3);
console.log(repeatStringNumTimes("*", 3));

// Other solution
