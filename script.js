// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = ['!', '@', '#', '$', '&', '*', '(', '^', ')', '?'];
var numb = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var upperC = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerC = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];

// Write password to the #password input
function writePassword() {
  // alert("Workng");
  var password = generatePassword();
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