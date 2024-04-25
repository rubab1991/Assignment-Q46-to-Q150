//Write a condition using logical operators that checks if a number is divisible by both 2 and 3.
// This function checks if a number is divisible by both 2 and 3
function isDivisibleByTwoAndThree(number) {
    return number % 2 === 0 && number % 3 === 0;
}
console.log(isDivisibleByTwoAndThree(128));
console.log(isDivisibleByTwoAndThree(8));
