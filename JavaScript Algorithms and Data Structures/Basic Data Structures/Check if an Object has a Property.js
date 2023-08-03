/*
*let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  // Only change code below this line

  // Only change code above this line
}

console.log(isEveryoneHere(users));
* */

// My solution
let users = {
    Alan: {
        age: 27,
        online: true
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: true
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function isEveryoneHere(userObj) {
    // Only change code below this line
    if('Alan' in userObj != true) {
        return false;
    }
    if(userObj.hasOwnProperty('Jeff') != true) {
        return false;
    }
    if('Sarah' in userObj != true) {
        return false;
    }
    if(userObj.hasOwnProperty('Ryan') != true) {
        return false;
    }
    return true;
    // Only change code above this line
}
console.log(isEveryoneHere(users));

// Other solution
let users = {
    Alan: {
        age: 27,
        online: true
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: true
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function isEveryoneHere(userObj) {
    return userObj.hasOwnProperty("Alan") &&
        userObj.hasOwnProperty("Jeff") &&
        userObj.hasOwnProperty("Sarah") &&
        userObj.hasOwnProperty("Ryan");
}