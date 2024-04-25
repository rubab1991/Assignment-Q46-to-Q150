// Suppose you're comparing prices of two different sets of laptops.Use the spread operator to combine these
//arrays into a single array sorted in ascending order,then log the result.
let pricesSet1=[2000,1500,3000];
let pricesSet2=[1000,6000,4000];
let combinedPrices=[...pricesSet1,...pricesSet2].sort((a,b)=>a-b);
console.log(combinedPrices);


