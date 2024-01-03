myVariable = 9;
console.log(myVariable); // 9

function hello() {

    // applicable only for this function
    'use strict';

    string = 'hello'; // throws an error
    console.log(string);
}

hello();