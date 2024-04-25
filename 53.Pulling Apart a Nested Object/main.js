//Imagine you have a list inside another list that shows what a computer programmer knows, like coding 
//languages, tools, and software frameworks. Find a way to get three specific skills from this list and 
//show them.
// A list showing a programmer's skills in detail
var developerskills = {
    languages: ["javascript", "typescript", "python"],
    tools: ["Git", "webpack", "Docker"],
    frameworks: ["React", "Angular", "Vue"]
};
// Getting specific skills from the list
var languages = developerskills.languages, tools = developerskills.tools, frameworks = developerskills.frameworks;
// Showing a skill from each category
console.log("language: ".concat(languages[0], ",tool: ").concat(tools[0], " ,framework: ").concat(frameworks[0]));
