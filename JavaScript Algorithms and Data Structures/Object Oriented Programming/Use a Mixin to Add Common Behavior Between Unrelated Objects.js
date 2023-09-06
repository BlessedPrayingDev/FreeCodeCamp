/*
*let bird = {
    name: "Donald",
    numLegs: 2
};

let boat = {
    name: "Warrior",
    type: "race-boat"
};

// Only change code below this line
* */

// My solution
let bird = {
    name: "Donald",
    numLegs: 2
};

let boat = {
    name: "Warrior",
    type: "race-boat"
};

// Only change code below this line
let glideMixin = (obj) => {
    obj.glide = () => {
        console.log("I can glide")
    }
}

glideMixin(bird);
glideMixin(boat);