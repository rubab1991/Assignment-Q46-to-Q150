//Updating Object Properties: Add a property named color to the existing car object, and then update the year
// property to 2021. Show how to perform these operations.

// Starting with our car object
let car={
    make:"toyota",
    model:"corolla",
    year:2020
};
// Adding a new property 'color' and updating 'year'
car.color="blue";
car.year=2021;
// Showing the updated car object
console.log(car); // Outputs the car object with the new color and updated year
// Now our car is blue and its model year is updated to 2021.
