/*
*function titleCase(str) {
  return str;
}

titleCase("I'm a little tea pot");
* */

// My solution
function titleCase(str) {
    const newTitle = str.split(" ");
    const updatedTitle = [];
    for (let st in newTitle) {
        updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
    }
    return updatedTitle.join(" ");
}

// Other solution
function titleCase(str) {
    return str
        .toLowerCase()
        .split(" ")
        .map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
        .join(" ");
}

titleCase("I'm a little tea pot");