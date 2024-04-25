//Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a 
//statement saying you enjoy that hobby.

//// Defines a function that accepts multiple hobbies as arguments// ... are used for multipe things

function logHobbies(...hobbies:string[]){
    hobbies.forEach((hobby) =>{console.log(`I love ${hobby}`)}
)};
logHobbies("cycling","reading","coding")

