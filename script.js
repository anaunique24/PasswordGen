var generateBtn = document.querySelector("#generate");
var specialChar = "!@#$%^&*()_+~`|}{[];:?<>,./-=";
var numb = "1234567890";
var upperC = "ABCDEFGFIJKLMNOPQRSTUVWXYZ";
var lowerC = "abcdefghijklmnopqrstuvwxyz";

var passLength = prompt("Please enter the length you want your password to be.");

// Write password to the #password input
function writePassword() {
  // alert("Workng");
  var password = generatePassword(8-128);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





// ask for length of a password (prompt)
    //save to a variable
// check the length provided by user is a number and between 8-128

// confirm tag: 4 times for uppercase, lowercase, numbers, and special characters
    // save to variable
//check if uppercase or lowercase or number or special character is there 
    //(confirm/ TvsF)
  // combine the confirmed arrays

//create an array for all character types seperatly
//create an aray  to have a new password with length provided by user [ ]
//generate a random selector from combined array and push to new password array. do this step up to the length of the user input. (loop)

//return the value and display on the page