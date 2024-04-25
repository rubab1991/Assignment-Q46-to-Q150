//Find the index of "Banana" in an array of fruits and replace it with "Mango".
// This function finds "Banana" in the fruits array and replaces it with "Mango"
function replaceBananaWithMango(fruits) {
    var index = fruits.indexOf("banana");
    if (index !== -1)
        fruits[index] = "mango";
}
var fruits = ["apple", "banana", "orange"];
replaceBananaWithMango(fruits);
console.log(fruits);
