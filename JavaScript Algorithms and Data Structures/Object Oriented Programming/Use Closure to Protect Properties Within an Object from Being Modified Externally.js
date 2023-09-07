/*
*function Bird() {
  this.weight = 15;


}
* */

// My solution
function Bird() {
    let weight = 15;

    this.getWeight = () => {
        return weight;
    }
}

let ducky = new Bird();
ducky.getWeight();