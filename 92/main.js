//Write a function to remove the last element from an array and return the removed element.
// function removelastElement(arr:string[]):string|undefined{
//     return arr.pop();
// }
// const fruits:string[]=["apple","banana","mango"]
// console.log(removelastElement(fruits));
// console.log(fruits);
function removelastElement(arr) {
    return arr.pop();
}
var fruits = ["mango", "orange", "banana"];
console.log(removelastElement(fruits));
console.log(fruits);
