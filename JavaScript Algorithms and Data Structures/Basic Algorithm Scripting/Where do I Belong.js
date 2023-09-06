/*
*function getIndexToIns(arr, num) {
  return num;
}

getIndexToIns([40, 60], 50);
* */

// My solution
function getIndexToIns(arr, num) {
    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= num) return i;
    }

    return arr.length;
}