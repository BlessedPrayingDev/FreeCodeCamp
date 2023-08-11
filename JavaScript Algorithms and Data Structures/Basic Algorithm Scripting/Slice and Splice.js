/*
*function frankenSplice(arr1, arr2, n) {
  return arr2;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
* */

// My solution
function frankenSplice(arr1, arr2, n) {
    let newArr = [];
    newArr = arr2.slice(0, n);
    newArr.push(...arr1)
    newArr.push(...arr2.slice(n , arr2.length))
    return newArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

// Ohter solution
function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    let localArr = arr2.slice();
    localArr.splice(n, 0, ...arr1);
    return localArr;
}

function frankenSplice(arr1, arr2, n) {
    return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
}