//Given an array of objects representing different laptops, each with properties make, model, and year, 
//use array destructuring to assign the first and second laptops to variables. Then, log these variables.
var laptops = [
    { make: "Dell", model: "XPS 15", year: 2022 },
    { make: "Apple", model: "Mac Book pro", year: 2020 },
    { make: "HP", model: "Spectre X360", year: 2011 }
];
var laptop1 = laptops[0], laptop2 = laptops[1];
console.log(laptop1);
console.log(laptop2);
