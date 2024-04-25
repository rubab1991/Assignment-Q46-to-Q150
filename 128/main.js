// Create an arrow function that takes multiple parameters and returns the product of all parameters.
// Arrow function that calculates the product of all its parameters
var multiparameters = function () {
    var number = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        number[_i] = arguments[_i];
    }
    return number.reduce(function (total, number) { return total * number; }, 1);
};
console.log(multiparameters(2, 3, 4));
