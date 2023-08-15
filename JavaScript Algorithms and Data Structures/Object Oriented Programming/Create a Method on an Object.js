/*
*let dog = {
  name: "Spot",
  numLegs: 4,

};

dog.sayLegs();
* */

// My solution
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs : () => {return "This dog has " + dog.numLegs + " legs."}
};

dog.sayLegs();
console.log(dog.sayLegs())