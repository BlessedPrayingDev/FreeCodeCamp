/*
* function chunkArrayInGroups(arr, size) {
  return arr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
* */

// My solution
function chunkArrayInGroups(arr, size) {
    let num;
    let newArr = [];
    if(arr.length % size === 0) {
        if(arr.length - size === 0) {
            num = 1;
        } else {
            num = arr.length / size;
        }
    } else {
        num = Math.ceil(arr.length / size);
    }

    for(let i = 0; i < num; i++) {
        newArr.push(arr.splice(0, size));
    }
    console.log(num)
    console.log(newArr)
    return newArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);