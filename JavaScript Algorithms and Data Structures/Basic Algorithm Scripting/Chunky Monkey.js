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


// Other solution
function chunkArrayInGroups(arr, size) {
    let temp = [];
    const result = [];

    for (let a = 0; a < arr.length; a++) {
        if (a % size !== size - 1) temp.push(arr[a]);
        else {
            temp.push(arr[a]);
            result.push(temp);
            temp = [];
        }
    }

    if (temp.length !== 0) result.push(temp);
    return result;
}

function chunkArrayInGroups(arr, size) {
    // Break it up.
    const newArr = [];
    for (let i = 0; i < arr.length; i += size) {
        newArr.push(arr.slice(i, i + size));
    }
    return newArr;
}