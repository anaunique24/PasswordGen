var generateBtn = document.querySelector("#generate");

function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  var length = passLength();
  var charTypes = passChar();
  var password = randomPass(length, charTypes);
    displayPassword(password);
}

function passLength() {
    var length = parseInt(prompt ("Please enter the length you want your password to be (8-128 characters)"));
    
    while (isNaN(length || length < 8 || length > 128)) {
        length = parseInt(alert("Invalid length. Must be between 8 and 128 characters."));
    }
    return length;
}

function passChar() {
    var lowerC = confirm("Would you like to include lowercase characters?");
    var upperC = confirm("Would you like to include upppercase characters?");
    var numb = confirm("Would you like to include numbers?");
    var specialChar = confirm("Would you like to include special characters?");

    while (!(upperC || numb || specialChar || lowerC)) {
        alert("You must select least one character type.");
        var lowerC = confirm("Would you like to include lowercase characters?");
        var upperC = confirm("Would you like to include upppercase characters?");
        var numb = confirm("Would you like to include numbers?");
        var specialChar = confirm("Would you like to include special characters?");
    }
    return {
        lowerC: lowerC,
        upperC: upperC,
        numb: numb,
        specialChar: specialChar
    }
}

function randomPass(length, charTypes) {
    var charset = "";
    if (charTypes.lowerC) charset += "abcdefghijklmnopqrstuvwxyz";
    if (charTypes.numb) charset += "0123456789";
    if (charTypes.upperC) charset += "ABCDEFGFIJKLMNOPQRSTUVWXYZ"
}






//create an array for all character types seperatly
//create an aray  to have a new password with length provided by user [ ]
//generate a random selector from combined array and push to new password array. do this step up to the length of the user input. (loop)

//return the value and display on the page

var specialChar = "!@#$%^&*()_+~`|}{[];:?<>,./-=";
var numb = "1234567890";
var upperC = "ABCDEFGFIJKLMNOPQRSTUVWXYZ";
var lowerC = "abcdefghijklmnopqrstuvwxyz";