//Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to
// lowercase, and logs both.

// This function changes a string to uppercase and then to lowercase
function convertCase(str:string){
    let upperstr=str.toUpperCase();    // Converts to uppercase
    let lowerstr=str.toLowerCase();    // Converts to lowercase
console.log("Uppercase:",upperstr,"lowercase:",lowerstr)
}

// Example: Changing the case of "Hello World"
convertCase("Hello World");
