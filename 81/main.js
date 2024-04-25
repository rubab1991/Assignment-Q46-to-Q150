// Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its 
//properties and values.
// // This function shows every detail about an object
// function logObjectProperties(obj:object){
// for(let property in obj)
//     // Loops through each property in the object
// {console.log(`${property}: ${obj[property]}`)}
//  // Shows the property name and its value
// }
// // Using the function with a car object
// logObjectProperties({
//     make: "Toyota",
//     model: "Corolla",
//     year: 2021,
//     color: "blue",
//   });
//   // It tells us each piece of information stored about the car.
function logObjectProperties(obj) {
    for (var property in obj) {
        console.log("".concat(property, "-").concat(obj[property]));
    }
}
logObjectProperties({
    make: "toyota",
    model: "corolla",
    year: 2021,
    color: "blue"
});
