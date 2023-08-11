/*
*function repeatStringNumTimes(str, num) {
  return str;
}

repeatStringNumTimes("abc", 3);
* */

// My solution
function repeatStringNumTimes(str, num) {
    let newWord = ""
    for(let i = 0; i < num; i++) {
        newWord += str;
    }
    console.log(newWord)
    return newWord;
}

repeatStringNumTimes("abc", 3);

// Other solution
function repeatStringNumTimes(str, num) {
    if (num < 1) {
        return "";
    } else {
        return str + repeatStringNumTimes(str, num - 1);
    }
}