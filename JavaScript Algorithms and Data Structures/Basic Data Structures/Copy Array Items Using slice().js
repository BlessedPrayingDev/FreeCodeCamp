/*
*function forecast(arr) {
  // Only change code below this line

  return arr;
}

// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
* */

// My solution
function forecast(arr) {
    // Only change code below this line
    let newArr = arr.slice(2, 4)
    return newArr;
}

// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

// Solution
function forecast(arr) {
    // change code below this line
    return arr.slice(2, 4);
}

// do not change code below this line
console.log(
    forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"])
);