//Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
// This function calculates the sum of all numbers in an array
function calculateSum(numbers) {
    return numbers.reduce(function (accumulator, current) { return accumulator + current; });
}
var numbers = [1, 2, 3, 4, 5];
console.log(calculateSum(numbers));
