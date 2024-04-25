//Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given
// string. It should return true if found, otherwise false.

// This function checks if a sentence has "JavaScript" in it
function hasJavascript(str:string):boolean{
    return str.includes("javascript"); // Checks for "JavaScript" and returns true or false
}

// Example: Seeing if a text mentions JavaScript
console.log(hasJavascript("I love coding in javascript"));
// It simply says true if "JavaScript" is there, or false if it's not.

