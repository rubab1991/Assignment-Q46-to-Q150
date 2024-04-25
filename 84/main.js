//Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word 
//"JavaScript" with "TypeScript".
// // This function swaps "JavaScript" with "TypeScript" in a sentence
// function replacingJavascriptWithTypeScript(sentence:string):string{
//     return sentence.replace(/javascript/g,"typescript")
// }
// console.log(replacingJavascriptWithTypeScript("I love javascript,javascript is awesome"));
function replacingJavascriptWithTypeScript(sentence) {
    return sentence.replace(/javascript/g, "Typescript");
}
console.log(replacingJavascriptWithTypeScript("i love javascript ,javascript is awesome"));
