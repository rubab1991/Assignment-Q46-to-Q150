//Compound Assignment Operators: Use compound assignment operators to simplify arithmetic operations. Start 
//with x = 4 and perform a series of operations (addition, subtraction, multiplication, division) on x using 
//compound operators.
// This function uses compound assignment operators for different operations
function useCompoundOperators() {
    var x = 4; //shows initial value of x
    console.log("initial value of x:", x);
    x += 2;
    console.log("after addition:", x); //shows x after addition
    x -= 1;
    console.log("after subtraction:", x); //shows x after subtraction
    x *= 2;
    console.log("after multiplication:", x); //shows x after multiplication
    x /= 2;
    console.log("ater division:", x); //shows x after division
}
useCompoundOperators();
