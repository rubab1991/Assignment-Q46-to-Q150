//Write an if statement that logs "Good Morning" if the current time is before 12 PM.
// Checks the current hour and logs "Good Morning" if it's before 12 PM
var currentTime = new Date();
if (currentTime.getHours() > 12) {
    console.log("Good Morning"); //its morning if before 12PM
}
// This simple check helps us greet users appropriately based on the time of day.
