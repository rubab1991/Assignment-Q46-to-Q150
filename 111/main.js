//Use an if-else-if chain to categorize a person's age group (child, teenager, adult).
// This function categorizes a person's age group
function categorizeAge(age) {
    if (age <= 13) {
        return "child";
    }
    else if (age <= 19) {
        return "teenager";
    }
    else {
        return "adult";
    }
}
console.log(categorizeAge(10));
console.log(categorizeAge(16));
console.log(categorizeAge(20));
