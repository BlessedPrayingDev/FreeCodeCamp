/*
*function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line

};
* */

// My solution
function Dog(name) {
    this.name = name;
}

Dog.prototype = {
    // Only change code below this line
    numLegs : 4,
    eat : () => {
        console.log("와구와구")
    },
    describe : () => {
        console.log(`내이름은 ${this.numLegs}`)
    }
};