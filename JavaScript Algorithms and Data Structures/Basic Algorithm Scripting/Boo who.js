/*
*function booWho(bool) {
  return bool;
}

booWho(null);
* */

// My solution
function booWho(bool) {
    switch(bool) {
        case true :
            return true;
        case false :
            return true;
        default :
            return false;
    }
}

booWho(null);

// Other solution
function booWho(bool) {
    return typeof bool === "boolean";
}

// test here
booWho(null);