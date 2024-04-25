//Default Parameters: Write a function that greets a user. It should take the user's name as a parameter and 
//say hello. If no name is given, it should greet an anonymous user.
function greetUser(name) {
    if (name === void 0) { name = "anonymous"; }
    console.log("Hello ".concat(name));
}
;
// Trying the function with a name and without
greetUser("Ali");
greetUser();
