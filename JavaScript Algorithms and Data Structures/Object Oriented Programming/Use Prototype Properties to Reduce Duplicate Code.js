/*
*function Dog(name) {
  this.name = name;
}



// Only change code above this line
let beagle = new Dog("Snoopy");
* */

// My solution
function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;
// Only change code above this line
let beagle = new Dog("Snoopy");