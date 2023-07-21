/*
*const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;

  if(responseFromServer) {
    // Change this line
  } else {
    // Change this line
  }
});
 */

// My solution
const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer;

    if(responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});