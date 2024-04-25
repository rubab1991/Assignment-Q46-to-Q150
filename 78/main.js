//Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one
// of each that performs the same task, such as squaring a number.
// Function declaration for squaring a number
function squareDeclaration(number) {
    return number * number;
}
// Function expression for squaring a number
var squareExpression = function (number) {
    return number * number;
};
console.log(squareExpression(4));
console.log(squareDeclaration(4));
