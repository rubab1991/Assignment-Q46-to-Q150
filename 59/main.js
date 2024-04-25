//Add a Special Number: Make a program that creates custom adders. These adders can add a specific number
//to any other number you give them later.
// This program makes a function that adds a specific number
function makeAdder(valueToAdd) {
    return function (number) {
        return number + valueToAdd;
        return number + valueToAdd;
    };
}
var addsix = makeAdder(6);
console.log(addsix(20));
