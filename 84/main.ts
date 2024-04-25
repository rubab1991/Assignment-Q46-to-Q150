//Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word 
//"JavaScript" with "TypeScript".

// This function swaps "JavaScript" with "TypeScript" in a sentence
function replacingJavascriptWithTypeScript(sentence:string):string{
    return sentence.replace(/javascript/g,"typescript");
    // Uses a regular expression with the 'g' flag for a global replacement
}

// Example: Changing a programming language name in a sentence
console.log(replacingJavascriptWithTypeScript("I love javascript,javascript is awesome"));


