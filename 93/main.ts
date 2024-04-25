//Find the index of "Banana" in an array of fruits and replace it with "Mango".

// This function finds "Banana" in the fruits array and replaces it with "Mango"
function replaceBananaWithMango(fruits:string[]) :void{
    const index = fruits.indexOf("banana");  // Finds the index of "Banana"
    if(index !== -1) fruits[index]="mango";
}
// Example: Replacing "Banana" in the array
const fruits:string[]=["apple","banana","orange"]
replaceBananaWithMango(fruits);

console.log(fruits);
// We're swapping "Banana" for "Mango" in our fruit list.
