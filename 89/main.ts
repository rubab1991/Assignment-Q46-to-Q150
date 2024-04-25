//Rounding Numbers: Create a function that takes a number with decimals (e.g., 3.14159) and rounds it to two
// decimal places.

// This function rounds a number to two decimal places
function roundToTwoDecimals(num:number):number{
 return  Number (num.toFixed(2)); 
}
console.log(roundToTwoDecimals(3.14159));


