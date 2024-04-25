// Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you 
//the user's name and age.
// This profile sets itself up and can share info about the user
var userprofile = (function () {
    var name;
    var age;
    return {
        displayinfo: function () { console.log("Name:".concat(name, ",Age").concat(age)); },
    };
})();
userprofile.displayinfo();
