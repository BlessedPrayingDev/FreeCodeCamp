// const sum = (x, y, z) => {
//     const args = [x, y, z];
//     let total = 0;
//     for (let i = 0; i < args.length; i++) {
//         total += args[i];
//     }
//     return total;
// }

const sum = (...args) => {
    let total = 0;
    console.log(args.length)
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
}

sum(1, 2, 3, 4);

