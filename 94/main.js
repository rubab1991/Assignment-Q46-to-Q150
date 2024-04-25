//Use the .map() method to create a new array that contains the length of each word from an array of words.
// Defines an array with some words
// const words:string[]=["Hello","World","typescript","javascript"];
// const lengths:number[]=words.map((word) =>word.length);
// console.log(lengths);
var words = ["Hello", "World", "javascript"];
var lengths = words.map(function (word) { return word.length; });
console.log(lengths);
