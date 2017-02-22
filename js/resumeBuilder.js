/*
This is empty on purpose! Your code to build the resume will go here.
 */
var email = "cameron@udacity.com";
var newEmail = email.replace("udacity", "gmail");

console.log(email);
console.log(newEmail);

var awesomeThoughts = "My name is Jim and I am AWESOME";

var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

$("#main").append(funThoughts);

 /*
----------------------------
 */

var name = "Jimssss";
var role = "Expert";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);

 /*
----------------------------
 */

var s = "audacity";

var udacityizer = function(s) {  
    // Right now, the variable s === "audacity"
    // Manipulate s to make it equal to "Udacity"
    // Your code goes here!
    str1 = "Uda";
    str2 = s.slice(4, 8);
    
    return str1 + str2;
};

// Did your code work? The line below will tell you!
console.log(udacityizer(s));