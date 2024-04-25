//  Create a loop that iterates through a string and stops when it finds the first vowel.
// This function iterates through a string and logs each character until it finds a vowel
function logUntilFirstVowel(str) {
    var vowels = "aeiouAEIOY";
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        if (vowels.includes(char)) {
            console.log("First vowel found: ".concat(char));
            break;
        }
        console.log(char); // Logs each character until a vowel is encountered
    }
}
logUntilFirstVowel("syzygy"); // Logs 's', 'y', 'z', 'y', and then 'First vowel found: y'
// Demonstrates iterating through a string and stopping at the first vowel.
