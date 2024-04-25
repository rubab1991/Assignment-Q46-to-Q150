//Add a Special Number: Make a program that creates custom adders. These adders can add a specific number
//to any other number you give them later.

// This program makes a function that adds a specific number
function makeAdder(valueToAdd: number): (number) => number {
  return function (number: number): number { 
    return number + valueToAdd;
    return number + valueToAdd;
  };
}

let addsix = makeAdder(6);
console.log(addsix(20));
