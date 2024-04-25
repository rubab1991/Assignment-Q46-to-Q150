//Convert a traditional function expression to an arrow function.

// Traditional function expression
const traditionalFunction= function (a,b){
    return a+b;
}

// Converted to arrow function
const arrowFunction=(a,b)=>a+b;

console.log(traditionalFunction(5,3));
console.log(arrowFunction(5,3));

