// Given a mix of different types of items, make a new list that has only the words.
// //// A mixed bag of items
// let mixedArray=["apple",2,"banana","orange",4,true,"carrot"];
// // Picks out only the words
// let stringsArray=mixedArray.filter((item) => typeof item ==="string")
// // Shows the list of just words
// console.log(stringsArray);
var mixedArray = ["apply", "banana", "orange", 6];
var stringsArray = mixedArray.filter(function (item) { return typeof item === "string"; });
console.log(stringsArray);
