// Create an arrow function that takes multiple parameters and returns the product of all parameters.

// Arrow function that calculates the product of all its parameters
const multiparameters=(... number: number[])=>
    number.reduce((total,number)=>total*number,1)
console.log(multiparameters(2,3,4));

