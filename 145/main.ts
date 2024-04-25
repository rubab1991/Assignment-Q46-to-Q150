//Create a function that accepts a callback and invokes it with some arguments.

// This function accepts a callback function and invokes it with given arguments
function executCallback(
    callback:(arg1:number,arg2:number)=>void,
arg1:number,
arg2:number
):void{
    callback(arg1,arg2); // Invokes the callback with the specified arguments
}
// Example callback function that adds two numbers
const add=(a:number,b:number)=>
    {console.log(a+b);
    };
    executCallback(add,5,3);
        
// Demonstrates invoking a callback function with arguments to perform an addition.
