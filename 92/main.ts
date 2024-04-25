//Write a function to remove the last element from an array and return the removed element.
function removelastElement(arr:string[]):string|undefined{
    return arr.pop();   // Removes and returns the last element of the array
}

// Example: Removing the last fruit from the array
const fruits:string[]=["apple","banana","mango"]
console.log(removelastElement(fruits));
console.log(fruits);


