/*
*function bouncer(arr) {
  return arr;
}

bouncer([7, "ate", "", false, 9]);
* */

// My solution
function bouncer(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(Boolean(arr[i])) {
            newArr.push(arr[i])
        }
    }
    console.log(newArr);
    return newArr;
}

bouncer([7, "ate", "", false, 9]);

// Other solution
function bouncer(arr) {
    return arr.filter(Boolean);
}