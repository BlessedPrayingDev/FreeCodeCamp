/*
*const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(allUsers) {
  // Only change code below this line

  // Only change code above this line
}

console.log(countOnline(users));
* */

// My solution
const users = {
    Alan: {
        online: false
    },
    Jeff: {
        online: true
    },
    Sarah: {
        online: false
    }
}

function countOnline(allUsers) {
    // Only change code below this line
    let cnt = 0;
    for(const online in allUsers) {
        console.log(allUsers[online].online == true)
        if(allUsers[online].online == true) {
            cnt++;
        }
    }
    return cnt;
    // Only change code above this line
}

console.log(countOnline(users));

// Other solution
function countOnline(usersObj) {
    // Only change code below this line
    let result = 0;
    for (let user in usersObj) {
        if (usersObj[user].online === true) {
            result++;
        }
    }
    return result;
    // Only change code above this line
}
