//Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.
function calculateArea(width, height) {
    return width * height;
}
var calculateAreaArrow = function (width, hieght) { return width * hieght; };
console.log(calculateAreaArrow(4, 4));
