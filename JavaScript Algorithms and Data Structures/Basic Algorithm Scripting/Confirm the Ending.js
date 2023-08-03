/*
*function confirmEnding(str, target) {
  return str;
}

confirmEnding("Bastian", "n");
* */

// My solution
function confirmEnding(str, target) {
    let testWord = str.split('').reverse().join('');
    let testWord2 = target.split('').reverse().join('');
    let cnt = 0;
    for(let i = 0; i < target.length; i++) {
        if(testWord[i] === testWord2[i]) {
            cnt++
        }
    }
    if(cnt === target.length) {
        return true
    } else {
        return false;
    }
}

confirmEnding("Bastian", "n");
console.log(confirmEnding("Bastian", "en"));

// Other solution
function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor

    return str.slice(str.length - target.length) === target;
}

confirmEnding("He has to give me a new name", "name");

// Other
function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor

    let re = new RegExp(target + "$", "i");

    return re.test(str);
}

console.log(confirmEnding("Bastian", "n"));

// Other
function confirmEnding(str, target) {
    return str.slice(-target.length) === target
}

confirmEnding("Bastian", "n");