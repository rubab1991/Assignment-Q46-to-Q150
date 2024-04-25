// Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you 
//the user's name and age.


// This profile sets itself up and can share info about the user
let userprofile=(function(){
    let name:"Albert";
     let age:30;


    return{
displayinfo: function()
{console.log(`Name:${name},Age${age}`);},

    };

}
)();

userprofile.displayinfo();



