/*
*function factorialize(num) {
  return num;
}

factorialize(5);
* */

// My solution
function factorialize(num) {
    if(num == 0) {
        return 1
    } else {
        return factorialize(num-1) * num
    }
}

factorialize(5);
console.log(factorialize(5));

// Other solution
function factorialize(num) {
    return num < 0 ? 1 :
        new Array(num)
            .fill(undefined)
            .reduce((product, _, index) => product * (index + 1), 1);
}
factorialize(5);