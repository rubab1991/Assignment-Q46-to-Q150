//Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign 
//a const-declared variable and catch the error.

// Using `let` for a variable that can be reassigned
let age=24;
age=30;
console.log(age);

// Trying to reassign a `const`-declared variable
const name1:string ="Alice";
try{name1="Bob";} // This line will cause an error
catch(error)
{console.log("Error:can't reassign value to const-declared variable");
}






