// 01. Compare Scopes of the var and let Keywords
// function checkScope() {
//     var i = 'function scope'; // var 가 global이어서 i가 어떤 i 인지 구분이 힘듬
//     if (true) {
//         i = 'block scope'; //
//         console.log('Block scope i is: ', i);
//     }
//     console.log('Function scope i is: ', i);
//     return i;
// }

function checkScope() {
    let i = 'function scope';
    if (true) {
        let i = 'block scope';
        console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}

// 02. Mutate an Array Declared with const
// const s = [5, 7, 2];
// function editInPlace() {
//     // Only change code below this line
//
//     // Using s = [2, 5, 7] would be invalid
//
//     // Only change code above this line
// }
// editInPlace();

const s = [5, 7, 2];
function editInPlace() {
    // Only change code below this line
    s.pop();
    s.unshift(2);
    // Using s = [2, 5, 7] would be invalid

    // Only change code above this line
}
editInPlace();

// Set Default Parameters for Your Functions

// 03. Prevent Object Mutation

// function freezeObj() {
//     const MATH_CONSTANTS = {
//         PI: 3.14
//     };
//     // Only change code below this line
//
//
//     // Only change code above this line
//     try {
//         MATH_CONSTANTS.PI = 99;
//     } catch(ex) {
//         console.log(ex);
//     }
//     return MATH_CONSTANTS.PI;
// }
// const PI = freezeObj();

function freezeObj() {
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    // Only change code below this line
    Object.freeze(MATH_CONSTANTS);

    // Only change code above this line
    try {
        MATH_CONSTANTS.PI = 99;
    } catch(ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

// 04. Use Arrow Functions to Write Concise Anonymous Functions

var magic = function() {
    return new Date();
};

