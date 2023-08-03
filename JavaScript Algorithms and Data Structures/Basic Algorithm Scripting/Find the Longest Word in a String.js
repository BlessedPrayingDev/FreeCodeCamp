/*
*function findLongestWordLength(str) {
  return str.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
* */

// My solution
function findLongestWordLength(str) {
    let newArr = str.split(' ');
    let newArr2 = [];
    console.log(newArr.length)
    for(let i = 0; i < newArr.length; i++) {
        newArr2.push(newArr[i].length);
    }
    return Math.max(...newArr2);
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");


// Other solution
function findLongestWordLength(str) {
    let words = str.split(' ');
    let maxLength = 0;

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            maxLength = words[i].length;
        }
    }

    return maxLength;
}