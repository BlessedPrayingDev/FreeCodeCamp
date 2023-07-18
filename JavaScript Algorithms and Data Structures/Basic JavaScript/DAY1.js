sumHundred = (n) => {
    if(n <= 0) {
        return 0;
    } else {

        sumHundred(n-1);
        return n
    }
}

console.log(sumHundred(100));