//Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a 
//statement saying you enjoy that hobby.
//// Defines a function that accepts multiple hobbies as arguments// ... are used for multipe things
function logHobbies() {
    var hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobbies[_i] = arguments[_i];
    }
    hobbies.forEach(function (hobby) { console.log("I love ".concat(hobby)); });
}
;
logHobbies("cycling", "reading", "coding");
