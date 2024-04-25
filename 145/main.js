//Create a function that accepts a callback and invokes it with some arguments.
// This function accepts a callback function and invokes it with given arguments
function executCallback(callback, arg1, arg2) {
    callback(arg1, arg2); // Invokes the callback with the specified arguments
}
// Example callback function that adds two numbers
var add = function (a, b) {
    console.log(a + b);
};
executCallback(add, 5, 3);
