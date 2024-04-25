//Finding the Position of a Substring: Write a function that locates the first occurrence of the word "code" 
//within any given string and returns its position.
// // This function finds where "code" first shows up in a text
// function findCodePosition(str:string):number{
//     return str.indexOf("code"); 
// }
// console.log(findCodePosition("Learn to code with typescript"));
function find_code_position(str) {
    return str.indexOf("code");
}
console.log(find_code_position("learn to code with typescript"));
