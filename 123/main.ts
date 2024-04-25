//  Create a loop that iterates through a string and stops when it finds the first vowel.

// This function iterates through a string and logs each character until it finds a vowel
function logUntilFirstVowel(str:string):void{
    const vowels="aeiouAEIOY";
    for(const char of str){
        if(vowels.includes(char)){
            console.log(`First vowel found: ${char}`);
            break;
        }
        console.log(char);    // Logs each character until a vowel is encountered
        }
}
logUntilFirstVowel("syzygy");    // Logs 's', 'y', 'z', 'y', and then 'First vowel found: y'
// Demonstrates iterating through a string and stopping at the first vowel.

