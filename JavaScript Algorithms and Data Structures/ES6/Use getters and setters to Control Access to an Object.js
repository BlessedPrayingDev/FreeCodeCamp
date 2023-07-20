/*
*
* // Only change code below this line

// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
* */

// My solution
// Only change code below this line
class Thermostat {
    constructor(fahrenheit) {
        this._fahrenheit = fahrenheit;
    }
    get temperature() {
        return ((5/9) * (this._fahrenheit - 32));
    }
    set temperature(updateFahrenheit) {
        return this._fahrenheit = (updateFahrenheit * 9.0) / 5 + 32;
    }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(temp)