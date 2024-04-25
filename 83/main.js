//Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to
// lowercase, and logs both.
// This function changes a string to uppercase and then to lowercase
function convertCase(str) {
    var upperstr = str.toUpperCase();
    var lowerstr = str.toLowerCase();
    console.log("Uppercase:", upperstr, "lowercase:", lowerstr);
}
convertCase("Hello World");
